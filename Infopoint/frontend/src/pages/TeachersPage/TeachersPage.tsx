import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TeachersPage.module.css";
import { type TeacherInfoDTO } from "../../services/Teachers";

function todayISO(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export default function TeachersPage() {
    const navigate = useNavigate();
    const date = todayISO();
    const [q, setQ] = useState("");
    const [teachers, setTeachers] = useState<TeacherInfoDTO[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getRoom = (t: TeacherInfoDTO): string => {
        const cs = t.currentSubject;
        const room = cs?.room?.trim();
        return room ? room : "---";
    };

    const displayName = (t: TeacherInfoDTO): string => {
        if (t.lastName && t.firstName) return `${t.lastName} ${t.firstName}`;
        return t.fullHeader ?? t.shortCode;
    };

    const openTeacherDetails = (shortCode: string) => {
        navigate(`/teachers/${encodeURIComponent(shortCode)}?date=${encodeURIComponent(date)}`);
    };

    // ---------- Alle Lehrer laden ----------
    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");

                const params = new URLSearchParams({
                    q: "",
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
                setTeachers(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Laden fehlgeschlagen");
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [date]);

    const query = q.toLowerCase().trim();
    const filteredTeachers = teachers.filter((t) => {
        if (!query) return true;
        const name = `${t.lastName} ${t.firstName}`.toLowerCase();
        return (
            name.includes(query) ||
            t.shortCode.toLowerCase().includes(query) ||
            t.fullHeader.toLowerCase().includes(query)
        );
    });

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
            </div>

            <div className={styles.card}>
                <div className={styles.status}>
                    <span>Alle Lehrer</span>
                    {loading ? (
                        <span>Wird geladen…</span>
                    ) : error ? (
                        <span className={styles.error}>Fehler: {error}</span>
                    ) : (
                        <span>{filteredTeachers.length} Lehrer</span>
                    )}
                </div>

                <div className={styles.list}>
                    {filteredTeachers.map((t) => (
                        <button
                            key={`${t.shortCode}-${t.lastName}-${t.firstName}`}
                            className={styles.itemButton}
                            onClick={() => openTeacherDetails(t.shortCode)}
                            type="button"
                        >
                            <div className={styles.item}>
                                <div className={styles.name}>{displayName(t)}</div>
                                <div className={styles.code}>{t.shortCode}</div>
                                <div className={styles.room}>Raum: {getRoom(t)}</div>
                            </div>
                        </button>
                    ))}

                    {!loading && filteredTeachers.length === 0 && (
                        <div className={styles.empty}>
                            {q.trim() ? "Keine Lehrer gefunden" : "Keine Lehrer vorhanden"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
