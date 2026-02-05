import { useEffect, useState } from "react";
import styles from "./TeachersPage.module.css";
import { type TeacherInfoDTO } from "../../services/Teachers";

function todayISO(): string {
    return new Date().toISOString().slice(0, 10);
}

const FAKE_POPULAR_QUERY = "a"; // liefert meistens viele Treffer

export default function TeachersPage() {
    const [q, setQ] = useState("");
    const [date, setDate] = useState(todayISO());

    // "Häufig gesucht" (fake)
    const [popular, setPopular] = useState<TeacherInfoDTO[]>([]);
    const [popularLoading, setPopularLoading] = useState(false);
    const [popularError, setPopularError] = useState("");

    // echte Suche
    const [results, setResults] = useState<TeacherInfoDTO[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getRoom = (t: TeacherInfoDTO): string => {
        const cs: any = t.currentSubject as any;
        return cs?.room ?? cs?.roomName ?? "---";
    };

    const displayName = (t: TeacherInfoDTO): string => {
        if (t.lastName && t.firstName) return `${t.lastName} ${t.firstName}`;
        return t.fullHeader ?? t.shortCode;
    };

    const showPopular = q.trim().length === 0;

    // ---------- Fake Popular (läuft über /search) ----------
    useEffect(() => {
        // nur laden, wenn Suchfeld leer ist
        if (!showPopular) return;

        const controller = new AbortController();

        (async () => {
            try {
                setPopularLoading(true);
                setPopularError("");

                const params = new URLSearchParams({
                    q: FAKE_POPULAR_QUERY,
                    date: date
                });

                const res = await fetch(`/api/v1/teacher-finder/search?${params}`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }

                const data = (await res.json()) as TeacherInfoDTO[];

                // NUR Top 5 anzeigen
                setPopular(data.slice(0, 5));
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setPopularError(e instanceof Error ? e.message : "Load failed");
            } finally {
                setPopularLoading(false);
            }
        })();

        return () => controller.abort();
    }, [date, showPopular]);

    // ---------- Search ----------
    useEffect(() => {
        const query = q.trim();

        if (query.length < 2) {
            setResults([]);
            setError("");
            setLoading(false);
            return;
        }

        setLoading(true);
        setError("");

        const controller = new AbortController();

        const t = setTimeout(async () => {
            try {
                const params = new URLSearchParams({
                    q: query,
                    date: date
                });

                const res = await fetch(`/api/v1/teacher-finder/search?${params}`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }

                const data = (await res.json()) as TeacherInfoDTO[];
                setResults(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Load failed");
            } finally {
                setLoading(false);
            }
        }, 300);

        return () => {
            clearTimeout(t);
            controller.abort();
        };
    }, [q, date]);

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Lehrer Suche</h1>

            {/* Search Row */}
            <div className={styles.searchRow}>
                <div className={styles.search}>
                    <input
                        className={styles.searchInput}
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Namen oder Kürzel eingeben"
                        aria-label="Lehrer suchen"
                    />
                    <span className={styles.searchIcon} aria-hidden="true">⌕</span>
                </div>

                <input
                    className={styles.date}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    title="Datum"
                />
            </div>

            {/* POPULAR CARD (Fake) */}
            {showPopular && (
                <div className={styles.card}>
                    <div className={styles.status}>
                        <span>Häufig gesucht</span>

                        {popularLoading ? (
                            <span>Wird geladen…</span>
                        ) : popularError ? (
                            <span className={styles.error}>Fehler: {popularError}</span>
                        ) : (
                            <span>{popular.length} / 5</span>
                        )}
                    </div>

                    <div className={styles.list}>
                        {popular.map((t) => (
                            <button
                                key={`${t.shortCode}-${t.lastName}-${t.firstName}`}
                                className={styles.itemButton}
                                onClick={() => setQ(t.shortCode)} // Klick = suche nach Kürzel
                                type="button"
                            >
                                <div className={styles.item}>
                                    <div className={styles.name}>{displayName(t)}</div>
                                    <div className={styles.code}>{t.shortCode}</div>
                                    <div className={styles.room}>Raum: {getRoom(t)}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* SEARCH RESULTS CARD */}
            {!showPopular && (
                <div className={styles.card}>
                    <div className={styles.status}>
                        {loading ? (
                            <span>Wird geladen…</span>
                        ) : error ? (
                            <span className={styles.error}>Fehler: {error}</span>
                        ) : (
                            <span>{results.length} Treffer</span>
                        )}
                        <span />
                    </div>

                    <div className={styles.list}>
                        {results.map((t) => (
                            <div
                                key={`${t.shortCode}-${t.lastName}-${t.firstName}`}
                                className={styles.item}
                            >
                                <div className={styles.name}>{displayName(t)}</div>
                                <div className={styles.code}>{t.shortCode}</div>
                                <div className={styles.room}>Raum: {getRoom(t)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}