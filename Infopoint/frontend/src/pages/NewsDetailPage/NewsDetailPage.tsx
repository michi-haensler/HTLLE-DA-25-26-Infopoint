import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchNewsById, type NewsItem } from "../../features/information/api/information.api";
import styles from "./NewsDetailPage.module.css";

export default function NewsDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [news, setNews] = useState<NewsItem | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!id) {
            setError("Keine News-ID angegeben");
            setLoading(false);
            return;
        }

        (async () => {
            try {
                setLoading(true);
                setError("");
                const data = await fetchNewsById(id);
                if (!data) {
                    setError("Neuigkeit nicht gefunden");
                } else {
                    setNews(data);
                }
            } catch (e) {
                setError(e instanceof Error ? e.message : "Fehler beim Laden");
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    const handleBack = () => {
        navigate("/news");
    };

    if (loading) {
        return (
            <div className={styles.page}>
                <div className={styles.loading}>Wird geladen…</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.page}>
                <button className={styles.backButton} onClick={handleBack}>
                    ← Zurück
                </button>
                <div className={styles.error}>{error}</div>
            </div>
        );
    }

    if (!news) {
        return null;
    }

    // Cockpit-Bild URL konstruieren
    const imageUrl = news.image?.path ? `http://localhost:8080/storage/uploads${news.image.path}` : null;

    return (
        <div className={styles.page}>
            <button className={styles.backButton} onClick={handleBack}>
                ← Zurück zu den Neuigkeiten
            </button>

            <article className={styles.article}>
                <h1 className={styles.title}>{news.title || "Neuigkeit"}</h1>

                {imageUrl && (
                    <div className={styles.imageContainer}>
                        <img
                            src={imageUrl}
                            alt={news.title || "News Bild"}
                            className={styles.image}
                        />
                    </div>
                )}

                {news.teaser && (
                    <p className={styles.teaser}>{news.teaser}</p>
                )}

                {news.content && (
                    <div
                        className={styles.content}
                        dangerouslySetInnerHTML={{ __html: news.content }}
                    />
                )}

                {!news.teaser && !news.content && (
                    <p className={styles.noContent}>Keine weiteren Details verfügbar.</p>
                )}
            </article>
        </div>
    );
}
