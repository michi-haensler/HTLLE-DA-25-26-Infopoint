import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./LaborDetailPage.module.css";

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

export default function LaborDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [laborPlan, setLaborPlan] = useState<LaborPlan | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedImage, setSelectedImage] = useState<number>(0);

    useEffect(() => {
        if (!id) return;

        const controller = new AbortController();

        (async () => {
            try {
                setLoading(true);
                setError("");

                const res = await fetch(`/api/v1/laborplaene/${id}`, {
                    headers: { Accept: "application/json" },
                    signal: controller.signal,
                });

                if (!res.ok) {
                    if (res.status === 404) {
                        throw new Error("Klasse nicht gefunden");
                    }
                    const text = await res.text();
                    throw new Error(`HTTP ${res.status}: ${text}`);
                }

                const data = (await res.json()) as LaborPlan;
                setLaborPlan(data);
            } catch (e) {
                if (e instanceof DOMException && e.name === "AbortError") return;
                setError(e instanceof Error ? e.message : "Laden fehlgeschlagen");
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    }, [id]);

    const getImageUrl = (path: string) => {
        return `/api/v1/laborplaene/image?path=${encodeURIComponent(path)}`;
    };

    const handleBack = () => {
        navigate("/laborstundenplan");
    };

    const handlePrevImage = () => {
        if (laborPlan?.images && selectedImage > 0) {
            setSelectedImage(selectedImage - 1);
        }
    };

    const handleNextImage = () => {
        if (laborPlan?.images && selectedImage < laborPlan.images.length - 1) {
            setSelectedImage(selectedImage + 1);
        }
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
                <div className={styles.error}>
                    <p>{error}</p>
                    <button className={styles.backButton} onClick={handleBack}>
                        Zurück zur Übersicht
                    </button>
                </div>
            </div>
        );
    }

    if (!laborPlan) {
        return (
            <div className={styles.page}>
                <div className={styles.error}>
                    <p>Klasse nicht gefunden</p>
                    <button className={styles.backButton} onClick={handleBack}>
                        Zurück zur Übersicht
                    </button>
                </div>
            </div>
        );
    }

    const images = laborPlan.images ?? [];
    const currentImage = images[selectedImage];

    return (
        <div className={styles.page}>
            <div className={styles.header}>
                <button className={styles.backButton} onClick={handleBack}>
                    ← Zurück
                </button>
                <h1 className={styles.title}>{laborPlan.className}</h1>
                {laborPlan.description && (
                    <p className={styles.description}>{laborPlan.description}</p>
                )}
            </div>

            {images.length === 0 ? (
                <div className={styles.noImages}>
                    Keine Bilder für diese Klasse vorhanden
                </div>
            ) : (
                <div className={styles.imageContainer}>
                    <div className={styles.imageWrapper}>
                        {currentImage && (
                            <img
                                src={getImageUrl(currentImage.path)}
                                alt={currentImage.title || `Stundenplan ${selectedImage + 1}`}
                                className={styles.image}
                            />
                        )}
                    </div>

                    {images.length > 1 && (
                        <div className={styles.navigation}>
                            <button
                                className={styles.navButton}
                                onClick={handlePrevImage}
                                disabled={selectedImage === 0}
                            >
                                ←
                            </button>
                            <span className={styles.imageCounter}>
                                {selectedImage + 1} / {images.length}
                            </span>
                            <button
                                className={styles.navButton}
                                onClick={handleNextImage}
                                disabled={selectedImage === images.length - 1}
                            >
                                →
                            </button>
                        </div>
                    )}

                    {/* Thumbnail Navigation */}
                    {images.length > 1 && (
                        <div className={styles.thumbnails}>
                            {images.map((img, index) => (
                                <button
                                    key={img._id || index}
                                    className={`${styles.thumbnail} ${
                                        index === selectedImage ? styles.thumbnailActive : ""
                                    }`}
                                    onClick={() => setSelectedImage(index)}
                                >
                                    <img
                                        src={getImageUrl(img.path)}
                                        alt={img.title || `Bild ${index + 1}`}
                                    />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
