import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import styles from "./TeacherDetailPage.module.css";
import { getTeacherDay, type TeacherDayDTO, type TeacherLessonDTO } from "../../services/Teachers";

function localISODate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

function formatUntisTime(value: number): string {
    const hours = Math.floor(value / 100);
    const minutes = value % 100;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
}

function lessonTitle(lesson: TeacherLessonDTO): string {
    if (lesson.cancelled) return "Entfällt";
    return lesson.subject || "Unterricht";
}

function displayRoom(room: string): string {
    const cleaned = room.trim();
    return cleaned ? cleaned : "---";
}

function nowAsUntisTime(): number {
    const now = new Date();
    return now.getHours() * 100 + now.getMinutes();
}

export default function TeacherDetailPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const { shortCode = "" } = useParams();
    const searchParams = new URLSearchParams(location.search);
    const date = searchParams.get("date") || localISODate();

    const [teacherDay, setTeacherDay] = useState<TeacherDayDTO | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!shortCode) return;
        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");
                const data = await getTeacherDay(shortCode, date);
                if (controller.signal.aborted) return;
                setTeacherDay(data);
            } catch (e) {
                if (controller.signal.aborted) return;
                setError(e instanceof Error ? e.message : "Laden fehlgeschlagen");
                setTeacherDay(null);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        })();

        return () => controller.abort();
    }, [shortCode, date]);

    const lessons = useMemo(() => teacherDay?.lessons ?? [], [teacherDay]);
    const isToday = date === localISODate();
    const now = nowAsUntisTime();

    const currentLessonId = teacherDay?.currentLesson
        ? `${teacherDay.currentLesson.startTime}-${teacherDay.currentLesson.endTime}`
        : "";

    const teacherLabel = teacherDay
        ? `${teacherDay.lastName} ${teacherDay.firstName} (${teacherDay.shortCode})`
        : shortCode;

    return (
        <div className={styles.page}>
            <div className={styles.backRow}>
                <button className={styles.backButton} onClick={() => navigate("/teachers")} type="button">
                    <span className="material-icons">arrow_back</span>
                    Zurück
                </button>
            </div>

            <h1 className={styles.title}>Lehrer Tagesansicht</h1>
            <p className={styles.subtitle}>{teacherLabel}</p>

            {loading && <div className={styles.loadingBox}>Wird geladen…</div>}
            {error && <div className={styles.errorBox}>Fehler: {error}</div>}

            {!loading && !error && (
                <div className={styles.timelineCard}>
                    <div className={styles.timelineHeader}>
                        <span>Tagesverlauf</span>
                        <span className={styles.timelineMeta}>{lessons.length} Einträge</span>
                    </div>

                    {lessons.length === 0 ? (
                        <div className={styles.emptyBox}>Keine Stunden gefunden.</div>
                    ) : (
                        <div className={styles.timeline}>
                            {lessons.map((lesson, idx) => {
                                const lessonId = `${lesson.startTime}-${lesson.endTime}`;
                                const isCurrent = currentLessonId === lessonId;
                                const isPast = isToday && lesson.endTime <= now && !isCurrent;
                                const isUpcoming = isToday && lesson.startTime > now;

                                return (
                                    <div
                                        key={`${lessonId}-${lesson.subject}-${idx}`}
                                        className={`${styles.lesson} ${
                                            lesson.cancelled ? styles.lessonCancelled : ""
                                        } ${isCurrent ? styles.lessonCurrent : ""}`}
                                    >
                                        <div className={styles.time}>
                                            {formatUntisTime(lesson.startTime)}-{formatUntisTime(lesson.endTime)}
                                        </div>
                                        <div className={styles.subjectRow}>
                                            <span className={styles.subject}>{lessonTitle(lesson)}</span>
                                            {lesson.cancelled && <span className={styles.badgeCancelled}>Entfällt</span>}
                                            {isCurrent && !lesson.cancelled && <span className={styles.badgeCurrent}>Jetzt</span>}
                                            {isUpcoming && !lesson.cancelled && (
                                                <span className={styles.badgeUpcoming}>Später</span>
                                            )}
                                            {isPast && !lesson.cancelled && <span className={styles.badgePast}>Vorbei</span>}
                                        </div>
                                        <div className={styles.meta}>
                                            Raum: {displayRoom(lesson.room)} | Klassen: {lesson.classes || "---"}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
