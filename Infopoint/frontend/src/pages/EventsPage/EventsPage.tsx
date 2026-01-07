import { useEffect, useMemo, useState } from "react";
import styles from "./EventsPage.module.css";

type CockpitEvent = {
    _id: string;
    title: string;
    start?: string;        // ISO oder Datum-String
    end?: string;          // optional
    description?: string;  // für die rechte Spalte (wenn keine Uhrzeit)
    image?: string;
};

function parseDate(value?: string): Date | null {
    if (!value) return null;

    // ISO? -> Date kann das
    const d1 = new Date(value);
    if (!Number.isNaN(d1.getTime())) return d1;

    // Falls es "25.10.2025" o.ä. ist:
    const m = value.match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
    if (m) {
        const [, dd, mm, yyyy] = m;
        const d2 = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
        if (!Number.isNaN(d2.getTime())) return d2;
    }

    return null;
}

function fmtDate(d: Date | null): string {
    if (!d) return "---";
    return d.toLocaleDateString("de-AT", { day: "2-digit", month: "2-digit", year: "numeric" });
}

function fmtTime(d: Date | null): string {
    if (!d) return "";
    return d.toLocaleTimeString("de-AT", { hour: "2-digit", minute: "2-digit" });
}

// Rechte Spalte: wenn Start-Zeit vorhanden -> "HH:MM Uhr", sonst Description (kurz)
function rightColumn(ev: CockpitEvent): string {
    const start = parseDate(ev.start);
    const t = fmtTime(start);
    if (t) return `${t} Uhr`;

    const desc = (ev.description ?? "").trim();
    if (!desc) return "";
    // kurz halten wie im Screenshot
    return desc.length > 18 ? desc.slice(0, 18) + "…" : desc;
}

export default function EventsPage() {
    const [events, setEvents] = useState<CockpitEvent[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        if (!BASE_URL) {
            setError("VITE_API_BASE_URL ist nicht gesetzt");
            return;
        }

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");

                // limit kannst du ändern
                const res = await fetch(`${BASE_URL}/api/v1/events/20`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    // wenn CMS down → Backend sollte idealerweise [] liefern,
                    // aber falls nicht: eine freundliche Meldung
                    throw new Error(
                        res.status >= 500
                            ? "Termine derzeit nicht verfügbar"
                            : `HTTP ${res.status}: ${text}`
                    );
                }

                const data = (await res.json()) as CockpitEvent[];
                setEvents(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Load failed");
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [BASE_URL]);

    const sorted = useMemo(() => {
        // newest first (desc)
        return [...events].sort((a, b) => {
            const da = parseDate(a.start)?.getTime() ?? 0;
            const db = parseDate(b.start)?.getTime() ?? 0;
            return db - da;
        });
    }, [events]);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Termine</h1>

            <div className={styles.card}>
                {loading && <div className={styles.info}>Wird geladen…</div>}
                {error && <div className={`${styles.info} ${styles.error}`}>Fehler: {error}</div>}

                {!loading && !error && sorted.length === 0 && (
                    <div className={styles.info}>Keine Termine vorhanden</div>
                )}

                <div className={styles.list}>
                    {sorted.map((ev) => {
                        const d = parseDate(ev.start);
                        return (
                            <div key={ev._id} className={styles.row}>
                                <div className={styles.colTitle}>{ev.title}</div>
                                <div className={styles.colDate}>{fmtDate(d)}</div>
                                <div className={styles.colRight}>{rightColumn(ev)}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}