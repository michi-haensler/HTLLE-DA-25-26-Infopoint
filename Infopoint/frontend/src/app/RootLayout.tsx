import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./RootLayout.module.css";

const MAX_RAGDOLL_ELEMENTS = 260;
const SECRET_CLICK_COUNT = 20;
const SECRET_CLICK_WINDOW_MS = 12000;

type RagdollBody = {
    element: HTMLElement;
    originalInlineStyle: string | null;
    width: number;
    height: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    angularVelocity: number;
    isDragging: boolean;
    dragOffsetX: number;
    dragOffsetY: number;
};

type LockedFormControl = {
    element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement;
    disabled: boolean;
    readOnly?: boolean;
};

type LockedEditable = {
    element: HTMLElement;
    contentEditableAttr: string | null;
};

type HiddenElement = {
    element: HTMLElement;
    originalInlineStyle: string | null;
};

export default function RootLayout() {
    const [easterEggActive, setEasterEggActive] = useState(false);
    const secretClickCountRef = useRef(0);
    const secretClickStartRef = useRef(0);
    const bodiesRef = useRef<RagdollBody[]>([]);
    const animationFrameRef = useRef<number | null>(null);
    const activePointerIdRef = useRef<number | null>(null);
    const activeBodyRef = useRef<RagdollBody | null>(null);
    const lastFrameTimeRef = useRef<number>(0);
    const lastPointerMoveRef = useRef<{ x: number; y: number; t: number } | null>(null);
    const lockedControlsRef = useRef<LockedFormControl[]>([]);
    const lockedEditablesRef = useRef<LockedEditable[]>([]);
    const hiddenElementsRef = useRef<HiddenElement[]>([]);

    const cleanupRagdoll = () => {
        if (animationFrameRef.current) {
            window.cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }

        for (const body of bodiesRef.current) {
            body.element.removeAttribute("data-ragdoll");
            if (body.originalInlineStyle === null) {
                body.element.removeAttribute("style");
            } else {
                body.element.setAttribute("style", body.originalInlineStyle);
            }
        }
        bodiesRef.current = [];
        activeBodyRef.current = null;
        activePointerIdRef.current = null;
        lastPointerMoveRef.current = null;

        for (const item of hiddenElementsRef.current) {
            if (item.originalInlineStyle === null) {
                item.element.removeAttribute("style");
            } else {
                item.element.setAttribute("style", item.originalInlineStyle);
            }
        }
        hiddenElementsRef.current = [];
    };

    const restoreLockedInputs = () => {
        for (const item of lockedControlsRef.current) {
            item.element.disabled = item.disabled;
            if (typeof item.readOnly === "boolean" && "readOnly" in item.element) {
                (item.element as HTMLInputElement | HTMLTextAreaElement).readOnly = item.readOnly;
            }
        }
        lockedControlsRef.current = [];

        for (const item of lockedEditablesRef.current) {
            if (item.contentEditableAttr === null) {
                item.element.removeAttribute("contenteditable");
            } else {
                item.element.setAttribute("contenteditable", item.contentEditableAttr);
            }
        }
        lockedEditablesRef.current = [];
    };

    useEffect(() => {
        const onHeaderSecretClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            const header = target?.closest("[data-secret-trigger='header']");
            if (!header) {
                secretClickCountRef.current = 0;
                secretClickStartRef.current = 0;
                return;
            }

            if (target?.closest("a, button, input, textarea, select, label")) {
                return;
            }

            const now = Date.now();
            if (
                secretClickStartRef.current === 0 ||
                now - secretClickStartRef.current > SECRET_CLICK_WINDOW_MS
            ) {
                secretClickStartRef.current = now;
                secretClickCountRef.current = 1;
            } else {
                secretClickCountRef.current += 1;
            }

            if (secretClickCountRef.current >= SECRET_CLICK_COUNT) {
                secretClickCountRef.current = 0;
                secretClickStartRef.current = 0;
                setEasterEggActive(true);
            }
        };

        document.addEventListener("click", onHeaderSecretClick, true);
        return () => {
            document.removeEventListener("click", onHeaderSecretClick, true);
        };
    }, []);

    useEffect(() => {
        if (!easterEggActive) {
            restoreLockedInputs();
            cleanupRagdoll();
            return;
        }

        const formControls = Array.from(
            document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | HTMLButtonElement>(
                "input, textarea, select, button"
            )
        ).filter((element) => !element.closest("[data-no-ragdoll='true']"));

        lockedControlsRef.current = formControls.map((element) => {
            const isReadableControl = element instanceof HTMLInputElement || element instanceof HTMLTextAreaElement;
            const original: LockedFormControl = {
                element,
                disabled: element.disabled,
                readOnly: isReadableControl ? element.readOnly : undefined,
            };
            element.disabled = true;
            if (isReadableControl) {
                element.readOnly = true;
            }
            return original;
        });

        const editables = Array.from(document.querySelectorAll<HTMLElement>("[contenteditable]")).filter(
            (element) => !element.closest("[data-no-ragdoll='true']")
        );
        lockedEditablesRef.current = editables.map((element) => {
            const original: LockedEditable = {
                element,
                contentEditableAttr: element.getAttribute("contenteditable"),
            };
            element.setAttribute("contenteditable", "false");
            return original;
        });

        const activeElement = document.activeElement as HTMLElement | null;
        activeElement?.blur();

        const isAllowedSecretTarget = (target: EventTarget | null) =>
            (target as HTMLElement | null)?.closest("[data-no-ragdoll='true']") !== null;

        const blockPointerAndClick = (event: MouseEvent | PointerEvent) => {
            if (isAllowedSecretTarget(event.target)) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
        };

        const blockSubmit = (event: SubmitEvent) => {
            if (isAllowedSecretTarget(event.target)) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
        };

        const blockKeyboardAction = (event: KeyboardEvent) => {
            if (isAllowedSecretTarget(event.target)) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
        };

        const protectedNodes = Array.from(
            document.querySelectorAll<HTMLElement>("[data-no-ragdoll='true']")
        );

        const candidateSelector = [
            "button",
            "a",
            "input",
            "textarea",
            "select",
            "li",
            "[role='button']",
            "[class*='card']",
            "[class*='item']",
            "[class*='row']",
            "[class*='tile']",
            "[class*='box']",
            "[class*='circle']",
            "[class*='dot']",
            "[class*='shape']",
            "[class*='bubble']",
            "[class*='badge']",
            "[class*='chip']",
            "[class*='icon']",
        ].join(",");

        const rawCandidates = Array.from(document.body.querySelectorAll<HTMLElement>(candidateSelector))
            .filter((element) => {
                if (
                    element.tagName === "HTML" ||
                    element.tagName === "BODY" ||
                    element.id === "root" ||
                    element.closest("[data-no-ragdoll='true']")
                ) {
                    return false;
                }

                // If a container includes protected UI (overlay controls), do not ragdoll it.
                if (protectedNodes.some((node) => element.contains(node))) {
                    return false;
                }
                const rect = element.getBoundingClientRect();
                const viewportArea = window.innerWidth * window.innerHeight;
                const elementArea = rect.width * rect.height;
                const marker = `${element.className ?? ""} ${element.id ?? ""}`.toLowerCase();
                const isDecorativeShape =
                    marker.includes("circle") ||
                    marker.includes("box") ||
                    marker.includes("dot") ||
                    marker.includes("shape") ||
                    marker.includes("bubble") ||
                    marker.includes("icon");
                const isVisible = isDecorativeShape
                    ? rect.width > 6 && rect.height > 6
                    : rect.width > 28 && rect.height > 14;
                const inViewport =
                    rect.bottom > 0 &&
                    rect.right > 0 &&
                    rect.top < window.innerHeight &&
                    rect.left < window.innerWidth;
                const isBackgroundLike =
                    elementArea > viewportArea * 0.45 ||
                    (rect.width > window.innerWidth * 0.9 && rect.height > window.innerHeight * 0.55);
                const isWholeElement =
                    element.tagName === "BUTTON" ||
                    element.tagName === "A" ||
                    element.tagName === "INPUT" ||
                    element.tagName === "TEXTAREA" ||
                    element.tagName === "SELECT" ||
                    element.tagName === "LI" ||
                    element.getAttribute("role") === "button";

                // Avoid tiny text wrappers unless they are explicit decorative pieces.
                const looksLikeTextOnlyNode = element.children.length === 0 && !isWholeElement && !isDecorativeShape;
                return isVisible && inViewport && !isBackgroundLike && !looksLikeTextOnlyNode;
            });

        // Decouple all moving parts: never allow ancestor+descendant in ragdoll at the same time.
        const candidates: HTMLElement[] = [];
        const scoreOf = (element: HTMLElement) => {
            const marker = `${element.className ?? ""} ${element.id ?? ""}`.toLowerCase();
            const tag = element.tagName;
            let score = 0;
            if (
                tag === "BUTTON" ||
                tag === "A" ||
                tag === "INPUT" ||
                tag === "TEXTAREA" ||
                tag === "SELECT" ||
                tag === "LI" ||
                element.getAttribute("role") === "button"
            ) {
                score += 100;
            }
            if (
                marker.includes("card") ||
                marker.includes("item") ||
                marker.includes("row") ||
                marker.includes("tile")
            ) {
                score += 80;
            }
            if (
                marker.includes("box") ||
                marker.includes("circle") ||
                marker.includes("dot") ||
                marker.includes("shape") ||
                marker.includes("bubble") ||
                marker.includes("badge") ||
                marker.includes("chip") ||
                marker.includes("icon")
            ) {
                score += 40;
            }
            score += Math.min((element.getBoundingClientRect().width * element.getBoundingClientRect().height) / 500, 30);
            return score;
        };

        rawCandidates
            .sort((a, b) => scoreOf(b) - scoreOf(a))
            .forEach((element) => {
                const conflicts = candidates.some(
                    (selected) => selected.contains(element) || element.contains(selected)
                );
                if (!conflicts) {
                    candidates.push(element);
                }
            });

        const detachedCandidates = candidates.slice(0, MAX_RAGDOLL_ELEMENTS);
        const selectedSet = new Set(detachedCandidates);

        const hideElement = (element: HTMLElement) => {
            if (hiddenElementsRef.current.some((entry) => entry.element === element)) {
                return;
            }
            hiddenElementsRef.current.push({
                element,
                originalInlineStyle: element.getAttribute("style"),
            });
            element.style.visibility = "hidden";
            element.style.opacity = "0";
            element.style.pointerEvents = "none";
        };

        // 1) Classic lists (ul/ol + li)
        const selectedListItems = detachedCandidates.filter((element) => element.tagName === "LI");
        const nativeListsToTrim = new Set<HTMLElement>();
        for (const item of selectedListItems) {
            const list = item.closest("ul, ol") as HTMLElement | null;
            if (list) {
                nativeListsToTrim.add(list);
            }
        }

        for (const list of nativeListsToTrim) {
            const listItems = Array.from(list.querySelectorAll<HTMLElement>("li"));
            for (const item of listItems) {
                if (!selectedSet.has(item)) {
                    hideElement(item);
                }
            }
        }

        // 2) App lists (e.g. div.list with button.itemButton rows)
        const isListContainer = (element: HTMLElement) => {
            const marker = `${element.className ?? ""} ${element.id ?? ""}`.toLowerCase();
            return (
                element.tagName === "UL" ||
                element.tagName === "OL" ||
                marker.includes("list") ||
                marker.includes("menu") ||
                marker.includes("feed")
            );
        };

        const isListEntry = (element: HTMLElement) => {
            const marker = `${element.className ?? ""} ${element.id ?? ""}`.toLowerCase();
            return (
                element.tagName === "LI" ||
                element.tagName === "BUTTON" ||
                marker.includes("item") ||
                marker.includes("entry") ||
                marker.includes("row")
            );
        };

        const appListsToTrim = new Set<HTMLElement>();
        for (const selected of detachedCandidates) {
            const parent = selected.parentElement as HTMLElement | null;
            if (!parent || !isListContainer(parent) || !isListEntry(selected)) {
                continue;
            }
            const siblingEntries = Array.from(parent.children).filter((child) =>
                isListEntry(child as HTMLElement)
            );
            if (siblingEntries.length >= 2) {
                appListsToTrim.add(parent);
            }
        }

        for (const list of appListsToTrim) {
            const directEntries = Array.from(list.children).filter((child) =>
                isListEntry(child as HTMLElement)
            ) as HTMLElement[];

            for (const entry of directEntries) {
                const shouldKeep =
                    selectedSet.has(entry) ||
                    detachedCandidates.some((selected) => entry.contains(selected));
                if (!shouldKeep) {
                    hideElement(entry);
                }
            }
        }

        const bodies: RagdollBody[] = detachedCandidates.map((element) => {
            const rect = element.getBoundingClientRect();
            const body: RagdollBody = {
                element,
                originalInlineStyle: element.getAttribute("style"),
                width: rect.width,
                height: rect.height,
                x: rect.left,
                y: rect.top,
                vx: (Math.random() - 0.5) * 120,
                vy: -220 - Math.random() * 480,
                angle: (Math.random() - 0.5) * 0.16,
                angularVelocity: (Math.random() - 0.5) * 4.2,
                isDragging: false,
                dragOffsetX: 0,
                dragOffsetY: 0,
            };

            element.style.position = "fixed";
            element.style.left = "0";
            element.style.top = "0";
            element.style.width = `${rect.width}px`;
            element.style.height = `${rect.height}px`;
            element.style.margin = "0";
            element.style.zIndex = "260";
            element.style.transformOrigin = "center center";
            element.style.transition = "none";
            element.style.touchAction = "none";
            element.style.userSelect = "none";
            element.style.willChange = "transform";
            element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}rad)`;
            element.setAttribute("data-ragdoll", "true");

            return body;
        });

        bodiesRef.current = bodies;

        const gravity = 1500;
        const restitution = 0.48;
        const friction = 0.995;
        const angularFriction = 0.992;

        const tick = (timestamp: number) => {
            if (!lastFrameTimeRef.current) {
                lastFrameTimeRef.current = timestamp;
            }
            const dt = Math.min((timestamp - lastFrameTimeRef.current) / 1000, 0.033);
            lastFrameTimeRef.current = timestamp;

            for (const body of bodiesRef.current) {
                if (body.isDragging) {
                    body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}rad)`;
                    continue;
                }

                body.vy += gravity * dt;
                body.vx *= friction;
                body.vy *= friction;
                body.angularVelocity *= angularFriction;

                body.x += body.vx * dt;
                body.y += body.vy * dt;
                body.angle += body.angularVelocity * dt;

                const maxX = window.innerWidth - body.width;
                const maxY = window.innerHeight - body.height;

                if (body.x < 0) {
                    body.x = 0;
                    body.vx = Math.abs(body.vx) * restitution;
                } else if (body.x > maxX) {
                    body.x = maxX;
                    body.vx = -Math.abs(body.vx) * restitution;
                }

                if (body.y < 0) {
                    body.y = 0;
                    body.vy = Math.abs(body.vy) * restitution;
                } else if (body.y > maxY) {
                    body.y = maxY;
                    body.vy = -Math.abs(body.vy) * restitution;
                    body.vx *= 0.92;
                }

                body.element.style.transform = `translate3d(${body.x}px, ${body.y}px, 0) rotate(${body.angle}rad)`;
            }

            animationFrameRef.current = window.requestAnimationFrame(tick);
        };

        const findBodyFromTarget = (target: EventTarget | null): RagdollBody | null => {
            const element = (target as HTMLElement | null)?.closest("[data-ragdoll='true']") as HTMLElement | null;
            if (!element) {
                return null;
            }
            return bodiesRef.current.find((body) => body.element === element) ?? null;
        };

        const onPointerDown = (event: PointerEvent) => {
            const body = findBodyFromTarget(event.target);
            if (!body) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();

            activePointerIdRef.current = event.pointerId;
            activeBodyRef.current = body;
            body.isDragging = true;
            body.dragOffsetX = event.clientX - body.x;
            body.dragOffsetY = event.clientY - body.y;
            body.vx = 0;
            body.vy = 0;
            body.angularVelocity = 0;
            body.element.setPointerCapture(event.pointerId);
            lastPointerMoveRef.current = { x: event.clientX, y: event.clientY, t: performance.now() };
        };

        const onPointerMove = (event: PointerEvent) => {
            const body = activeBodyRef.current;
            if (!body || activePointerIdRef.current !== event.pointerId) {
                return;
            }

            event.preventDefault();
            const nextX = event.clientX - body.dragOffsetX;
            const nextY = event.clientY - body.dragOffsetY;
            body.x = Math.min(Math.max(0, nextX), window.innerWidth - body.width);
            body.y = Math.min(Math.max(0, nextY), window.innerHeight - body.height);

            const now = performance.now();
            const last = lastPointerMoveRef.current;
            if (last) {
                const dtMove = Math.max((now - last.t) / 1000, 0.008);
                body.vx = (event.clientX - last.x) / dtMove;
                body.vy = (event.clientY - last.y) / dtMove;
                body.angularVelocity = Math.max(-5, Math.min(5, body.vx / 320));
            }
            lastPointerMoveRef.current = { x: event.clientX, y: event.clientY, t: now };
        };

        const releaseDragging = (event: PointerEvent) => {
            const body = activeBodyRef.current;
            if (!body || activePointerIdRef.current !== event.pointerId) {
                return;
            }
            body.isDragging = false;
            if (body.element.hasPointerCapture(event.pointerId)) {
                body.element.releasePointerCapture(event.pointerId);
            }
            activeBodyRef.current = null;
            activePointerIdRef.current = null;
            lastPointerMoveRef.current = null;
        };

        window.addEventListener("pointerdown", onPointerDown, { passive: false });
        window.addEventListener("pointermove", onPointerMove, { passive: false });
        window.addEventListener("pointerup", releaseDragging, { passive: true });
        window.addEventListener("pointercancel", releaseDragging, { passive: true });
        document.addEventListener("click", blockPointerAndClick, true);
        document.addEventListener("auxclick", blockPointerAndClick, true);
        document.addEventListener("submit", blockSubmit, true);
        document.addEventListener("keydown", blockKeyboardAction, true);

        animationFrameRef.current = window.requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerup", releaseDragging);
            window.removeEventListener("pointercancel", releaseDragging);
            document.removeEventListener("click", blockPointerAndClick, true);
            document.removeEventListener("auxclick", blockPointerAndClick, true);
            document.removeEventListener("submit", blockSubmit, true);
            document.removeEventListener("keydown", blockKeyboardAction, true);
            lastFrameTimeRef.current = 0;
            restoreLockedInputs();
            cleanupRagdoll();
        };
    }, [easterEggActive]);

    return (
        <div className={`${styles.shell} ${easterEggActive ? styles.secretActive : ""}`}>
            {/* Skip link for keyboard accessibility */}
            <a href="#main-content" className="skip-link">
                Zum Hauptinhalt springen
            </a>

            <Header />

            <main id="main-content" className={styles.content} tabIndex={-1}>
                <Outlet />
            </main>

            {easterEggActive && (
                <>
                    <div className={styles.easterOverlay} aria-hidden="true" data-no-ragdoll="true" />
                    <div className={styles.easterControls} aria-live="polite" data-no-ragdoll="true">
                        <span className={styles.easterHint}>Secret-Modus aktiv</span>
                        <button type="button" className={styles.easterClose} onClick={() => setEasterEggActive(false)}>
                            Schließen
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
