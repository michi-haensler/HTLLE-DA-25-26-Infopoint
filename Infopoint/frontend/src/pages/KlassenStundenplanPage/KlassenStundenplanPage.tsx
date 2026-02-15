import { useEffect, useState } from "react";
import styles from "./KlassenStundenplanPage.module.css";

type CurrentLesson = {
    subject: string;
    room: string;
    klassen: string; // Bei Klassen: Lehrer
    startTime: number;
    endTime: number;
};

type ClassInfoDTO = {
    className: string;
    fullName: string;
    shortCode: string;
    currentLesson: CurrentLesson | null;
};

function todayISO(): string {
    return new Date().toISOString().slice(0, 10);
}

export default function KlassenStundenplanPage() {
    const [q, setQ] = useState("");
    const [date, setDate] = useState(todayISO());

    // Alle Klassen (für "Häufig gesucht" / Übersicht)
    const [allClasses, setAllClasses] = useState<ClassInfoDTO[]>([]);
    const [allLoading, setAllLoading] = useState(false);
    const [allError, setAllError] = useState("");

    // Suchergebnisse
    const [results, setResults] = useState<ClassInfoDTO[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getRoom = (c: ClassInfoDTO): string => {
        return c.currentLesson?.room ?? "---";
    };

    const getTeacher = (c: ClassInfoDTO): string => {
        return c.currentLesson?.klassen ?? "---";
    };

    const showAllClasses = q.trim().length === 0;

    // ---------- Alle Klassen laden ----------
    useEffect(() => {
        if (!showAllClasses) return;

        const controller = new AbortController();

        (async () => {
            try {
                setAllLoading(true);
                setAllError("");

                const params = new URLSearchParams({ date });

                const res = await fetch(`/api/v1/class-finder/all?${params}`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }

                const data = (await res.json()) as ClassInfoDTO[];
                setAllClasses(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setAllError(e instanceof Error ? e.message : "Laden fehlgeschlagen");
            } finally {
                setAllLoading(false);
            }
        })();

        return () => controller.abort();
    }, [date, showAllClasses]);

    // ---------- Suche ----------
    useEffect(() => {
        const query = q.trim();

        if (query.length < 1) {
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
                    date: date,
                });

                const res = await fetch(`/api/v1/class-finder/search?${params}`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }

                const data = (await res.json()) as ClassInfoDTO[];
                setResults(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Suche fehlgeschlagen");
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
            <h1 className={styles.title}>Klassenstundenpläne</h1>

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

                <input
                    className={styles.date}
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    title="Datum"
                />
            </div>

            {/* ALLE KLASSEN */}
            {showAllClasses && (
                <div className={styles.card}>
                    <div className={styles.status}>
                        <span>Alle Klassen</span>

                        {allLoading ? (
                            <span>Wird geladen…</span>
                        ) : allError ? (
                            <span className={styles.error}>Fehler: {allError}</span>
                        ) : (
                            <span>{allClasses.length} Klassen</span>
                        )}
                    </div>

                    <div className={styles.list}>
                        {allClasses.map((c) => (
                            <button
                                key={c.className}
                                className={styles.itemButton}
                                onClick={() => setQ(c.className)}
                                type="button"
                            >
                                <div className={styles.item}>
                                    <div className={styles.name}>{c.className}</div>
                                    <div className={styles.teacher}>Lehrer: {getTeacher(c)}</div>
                                    <div className={styles.room}>Raum: {getRoom(c)}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* SUCHERGEBNISSE */}
            {!showAllClasses && (
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
                        {results.map((c) => (
                            <div key={c.className} className={styles.item}>
                                <div className={styles.name}>{c.className}</div>
                                <div className={styles.teacher}>Lehrer: {getTeacher(c)}</div>
                                <div className={styles.room}>Raum: {getRoom(c)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}