import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InfoPage.module.css";

type CockpitImage = {
    _id?: string;
    path?: string;
    title?: string;
    mime?: string;
};

type CockpitNews = {
    _id: string;
    title?: string;
    teaser?: string;
    content?: string;
    image?: CockpitImage;
    _created?: number; // Unix timestamp
};

function pickTitle(n: CockpitNews): string {
    return (n.title ?? "Neuigkeit").trim();
}

function formatDate(timestamp?: number): string {
    if (!timestamp) return "";
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString("de-AT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}

export default function NewsPage() {
    const navigate = useNavigate();
    const [items, setItems] = useState<CockpitNews[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");

                const res = await fetch(`/api/v1/news?limit=10`, {
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
    }, []);

    // Sortieren: neueste oben (absteigend nach _created)
    const list = useMemo(() => {
        return [...items].sort((a, b) => {
            const da = a._created ?? 0;
            const db = b._created ?? 0;
            return db - da;
        });
    }, [items]);

    const onOpen = (n: CockpitNews) => {
        navigate(`/news/${n._id}`);
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
                            <div className={styles.itemContent}>
                                <span className={styles.itemText}>{pickTitle(n)}</span>
                                {n._created && (
                                    <span className={styles.itemDate}>
                                        <span className={`material-icons ${styles.dateIcon}`} aria-hidden="true">event</span>
                                        {formatDate(n._created)}
                                    </span>
                                )}
                            </div>
                            <span className={styles.chevron} aria-hidden="true">›</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}