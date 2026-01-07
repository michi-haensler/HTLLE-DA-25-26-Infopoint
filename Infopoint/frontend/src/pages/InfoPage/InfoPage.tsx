import { useEffect, useMemo, useState } from "react";
import styles from "./InfoPage.module.css";

type CockpitNews = {
    _id: string;
    title?: string;
    // falls ihr andere Felder habt, egal – wir zeigen hier nur Titel
    // description?: string;
    // content?: string;
};

function pickTitle(n: CockpitNews): string {
    return (n.title ?? "Neuigkeit").trim();
}

export default function NewsPage() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    const [items, setItems] = useState<CockpitNews[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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

                const url = new URL(`${BASE_URL}/api/v1/news`);
                url.searchParams.set("limit", "10");

                const res = await fetch(url.toString(), {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(
                        res.status >= 500 ? "Neuigkeiten derzeit nicht verfügbar" : `HTTP ${res.status}: ${text}`
                    );
                }

                const data = (await res.json()) as CockpitNews[];
                setItems(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Load failed");
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [BASE_URL]);

    const list = useMemo(() => items, [items]);

    const onOpen = (n: CockpitNews) => {
        // später: Navigation auf Detailseite oder Modal öffnen
        console.log("open news:", n._id);
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Neuigkeiten</h1>

            <div className={styles.card}>
                {loading && <div className={styles.info}>Wird geladen…</div>}
                {error && <div className={`${styles.info} ${styles.error}`}>Fehler: {error}</div>}

                {!loading && !error && list.length === 0 && (
                    <div className={styles.info}>Keine Neuigkeiten vorhanden</div>
                )}

                <div className={styles.list}>
                    {list.map((n) => (
                        <button
                            key={n._id}
                            type="button"
                            className={styles.itemButton}
                            onClick={() => onOpen(n)}
                        >
                            <span className={styles.itemText}>{pickTitle(n)}</span>
                            <span className={styles.chevron} aria-hidden="true">
                ›
              </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}