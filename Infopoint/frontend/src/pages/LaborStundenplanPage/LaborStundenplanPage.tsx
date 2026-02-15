import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LaborStundenplanPage.module.css";

type CockpitImage = {
    _id: string;
    path: string;
    title?: string;
    mime?: string;
};

type LaborPlan = {
    _id: string;
    className: string;
    description?: string;
    images?: CockpitImage[];
    sortOrder?: number;
};

export default function LaborStundenplanPage() {
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [laborPlaene, setLaborPlaene] = useState<LaborPlan[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Alle Labor-Stundenpläne laden
    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");

                const res = await fetch("/api/v1/laborplaene", {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }

                const data = (await res.json()) as LaborPlan[];
                setLaborPlaene(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Laden fehlgeschlagen");
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, []);

    // Filtern nach Suchbegriff
    const filteredPlaene = laborPlaene.filter((plan) => {
        if (!q.trim()) return true;
        const query = q.toLowerCase().trim();
        return (
            plan.className?.toLowerCase().includes(query) ||
            plan.description?.toLowerCase().includes(query)
        );
    });

    const handleClick = (plan: LaborPlan) => {
        navigate(`/laborstundenplan/${plan._id}`);
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Laborstundenpläne</h1>

            {/* Search Row */}
            <div className={styles.searchRow}>
                <div className={styles.search}>
                    <input
                        className={styles.searchInput}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Klasse suchen (z.B. 5AH)"
                        aria-label="Klasse suchen"
                    />
                    <span className={styles.searchIcon} aria-hidden="true">⌕</span>
                </div>
            </div>

            {/* Klassenliste */}
            <div className={styles.card}>
                <div className={styles.status}>
                    <span>Klassen mit Laborstundenplänen</span>
                    {loading ? (
                        <span>Wird geladen…</span>
                    ) : error ? (
                        <span className={styles.error}>Fehler: {error}</span>
                    ) : (
                        <span>{filteredPlaene.length} Klassen</span>
                    )}
                </div>

                <div className={styles.list}>
                    {filteredPlaene.map((plan) => (
                        <button
                            key={plan._id}
                            className={styles.itemButton}
                            onClick={() => handleClick(plan)}
                            type="button"
                        >
                            <div className={styles.item}>
                                <div className={styles.name}>{plan.className}</div>
                                <div className={styles.description}>
                                    {plan.description || ""}
                                </div>
                                <div className={styles.imageCount}>
                                    {plan.images?.length ?? 0} Bilder
                                </div>
                            </div>
                        </button>
                    ))}

                    {!loading && filteredPlaene.length === 0 && (
                        <div className={styles.empty}>
                            {q.trim()
                                ? "Keine Klassen gefunden"
                                : "Keine Klassen im CMS gepflegt"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}