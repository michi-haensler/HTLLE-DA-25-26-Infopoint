import { useEffect, useState, useRef, useCallback } from "react";
import styles from "./InstaFeedPage.module.css";

declare global {
    interface Window {
        instgrm?: { Embeds?: { process?: () => void } };
    }
}

const SCRIPT_SRC = "https://www.instagram.com/embed.js";
const INSTAGRAM_URL = "https://www.instagram.com/htlleoben/";

type LoadState = "loading" | "loaded" | "error";

export default function InstaFeedPage() {
    const [loadState, setLoadState] = useState<LoadState>("loading");
    const embedContainerRef = useRef<HTMLDivElement>(null);
    const checkIntervalRef = useRef<number | null>(null);
    const timeoutRef = useRef<number | null>(null);

    const clearTimers = useCallback(() => {
        if (checkIntervalRef.current) {
            clearInterval(checkIntervalRef.current);
            checkIntervalRef.current = null;
        }
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }
    }, []);

    // Erstellt die blockquote imperativ (nicht durch React)
    const createBlockquote = useCallback(() => {
        if (!embedContainerRef.current) return;
        
        // Container komplett leeren
        embedContainerRef.current.innerHTML = "";
        
        // Neue blockquote erstellen
        const blockquote = document.createElement("blockquote");
        blockquote.className = "instagram-media";
        blockquote.setAttribute("data-instgrm-permalink", INSTAGRAM_URL);
        blockquote.setAttribute("data-instgrm-version", "14");
        
        embedContainerRef.current.appendChild(blockquote);
    }, []);

    const loadInstagramScript = useCallback(() => {
        return new Promise<void>((resolve, reject) => {
            // Altes Script entfernen falls vorhanden
            const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`);
            if (existing) {
                existing.remove();
                delete window.instgrm;
            }

            const script = document.createElement("script");
            script.src = SCRIPT_SRC;
            script.async = true;
            script.onload = () => resolve();
            script.onerror = () => reject(new Error("Script load failed"));
            document.body.appendChild(script);
        });
    }, []);

    const startLoadCheck = useCallback(() => {
        clearTimers();

        // Prüfe regelmäßig ob der iframe tatsächlich geladen ist
        checkIntervalRef.current = window.setInterval(() => {
            const iframe = embedContainerRef.current?.querySelector("iframe");
            if (iframe) {
                const height = iframe.getBoundingClientRect().height;
                if (height > 300) {
                    setLoadState("loaded");
                    clearTimers();
                }
            }
        }, 300);

        // Timeout nach 10 Sekunden
        timeoutRef.current = window.setTimeout(() => {
            clearTimers();
            const iframe = embedContainerRef.current?.querySelector("iframe");
            const height = iframe?.getBoundingClientRect().height || 0;
            if (height > 300) {
                setLoadState("loaded");
            } else {
                setLoadState("error");
            }
        }, 10000);
    }, [clearTimers]);

    const initInstagram = useCallback(async () => {
        try {
            setLoadState("loading");
            createBlockquote();
            await loadInstagramScript();
            window.instgrm?.Embeds?.process?.();
            startLoadCheck();
        } catch {
            setLoadState("error");
        }
    }, [createBlockquote, loadInstagramScript, startLoadCheck]);

    useEffect(() => {
        initInstagram();
        return clearTimers;
    }, [initInstagram, clearTimers]);

    const handleRetry = () => {
        initInstagram();
    };

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Instagram</h1>

            <div className={styles.embedWrapper}>
                {loadState === "loading" && (
                    <div className={styles.loadingOverlay}>
                        <span className={`material-icons ${styles.spinner}`}>sync</span>
                        <p className={styles.loadingText}>Instagram wird geladen...</p>
                    </div>
                )}

                {loadState === "error" && (
                    <div className={styles.errorOverlay}>
                        <span className={`material-icons ${styles.errorIcon}`}>cloud_off</span>
                        <p className={styles.errorText}>Instagram konnte nicht geladen werden</p>
                        <p className={styles.errorSubtext}>Überprüfe die Internetverbindung</p>
                        <button className={styles.retryButton} onClick={handleRetry}>
                            <span className="material-icons">refresh</span>
                            Erneut versuchen
                        </button>
                    </div>
                )}

                {/* Container wird imperativ verwaltet - React fasst ihn nicht an */}
                <div ref={embedContainerRef} className={styles.embedContainer} />
            </div>
        </main>
    );
}
