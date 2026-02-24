import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./KlassenStundenplanPage.module.css";
import { getAllClasses, type ClassInfoDTO } from "../../services/classes";

function todayISO(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export default function KlassenStundenplanPage() {
    const navigate = useNavigate();
    const date = todayISO();
    const [q, setQ] = useState("");
    const [classes, setClasses] = useState<ClassInfoDTO[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getRoom = (c: ClassInfoDTO): string => {
        const room = c.currentLesson?.room?.trim();
        return room ? room : "---";
    };

    const getTeacher = (c: ClassInfoDTO): string => {
        const teacher = c.currentLesson?.classes?.trim();
        return teacher ? teacher : "---";
    };

    // ---------- Alle Klassen laden ----------
    useEffect(() => {
        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");
                const data = await getAllClasses(date);
                if (controller.signal.aborted) return;
                setClasses(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Laden fehlgeschlagen");
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        })();

        return () => controller.abort();
    }, [date]);

    const query = q.toLowerCase().trim();
    const filteredClasses = classes.filter((c) => {
        if (!query) return true;
        return (
            c.className.toLowerCase().includes(query) ||
            c.shortCode.toLowerCase().includes(query) ||
            c.fullName.toLowerCase().includes(query)
        );
    });

    const openClassDetails = (shortCode: string) => {
        navigate(`/stundenplan/klassen/${encodeURIComponent(shortCode)}?date=${encodeURIComponent(date)}`);
    };

    return (
        <div className={styles.page}>
            <div className={styles.backRow}>
                <button
                    className={styles.backButton}
                    onClick={() => navigate("/stundenplan")}
                    type="button"
                >
                    <span className="material-icons">arrow_back</span>
                    Zurück
                </button>
            </div>
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

            </div>

            <div className={styles.card}>
                <div className={styles.status}>
                    <span>Alle Klassen</span>
                    {loading ? (
                        <span>Wird geladen…</span>
                    ) : error ? (
                        <span className={styles.error}>Fehler: {error}</span>
                    ) : (
                        <span>{filteredClasses.length} Klassen</span>
                    )}
                </div>

                <div className={styles.list}>
                    {filteredClasses.map((c) => (
                        <button
                            key={c.className}
                            className={styles.itemButton}
                            onClick={() => openClassDetails(c.shortCode)}
                            type="button"
                        >
                            <div className={styles.item}>
                                <div className={styles.name}>{c.className}</div>
                                <div className={styles.teacher}>Lehrer: {getTeacher(c)}</div>
                                <div className={styles.room}>Raum: {getRoom(c)}</div>
                            </div>
                        </button>
                    ))}

                    {!loading && filteredClasses.length === 0 && (
                        <div className={styles.empty}>
                            {q.trim() ? "Keine Klassen gefunden" : "Keine Klassen vorhanden"}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
