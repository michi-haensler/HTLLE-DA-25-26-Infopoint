import { useEffect, useState } from "react";
import styles from "./MapPage.module.css";

type MapItem = {
    _id: string;
    floor: string;
    label?: string;
    sortOrder?: number;
};

export default function MapPage() {
    const [maps, setMaps] = useState<MapItem[]>([]);
    const [selectedFloor, setSelectedFloor] = useState<string>("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    // Maps vom Backend laden
    useEffect(() => {
        (async () => {
            try {
                setLoading(true);
                const res = await fetch("/api/v1/map");
                if (!res.ok) throw new Error("Maps konnten nicht geladen werden");
                const data = (await res.json()) as MapItem[];
                setMaps(data);
                // Ersten Floor als Default setzen
                if (data.length > 0 && !selectedFloor) {
                    setSelectedFloor(data[0].floor);
                }
            } catch (e) {
                setError(e instanceof Error ? e.message : "Fehler beim Laden");
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    const imgSrc = selectedFloor ? `/api/v1/map/image/${selectedFloor}` : "/api/v1/map/image";

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Lageplan</h1>

            <div className={styles.card}>
                <div className={styles.content}>
                    {/* Bild */}
                    <div className={styles.mapArea}>
                        {loading ? (
                            <div className={styles.loadingBox}>Wird geladen...</div>
                        ) : (
                            <img
                                className={styles.mapImage}
                                src={imgSrc}
                                alt={`Lageplan ${selectedFloor}`}
                                onError={() =>
                                    setError("Lageplan konnte nicht geladen werden")
                                }
                            />
                        )}

                        {error && <div className={styles.errorBox}>{error}</div>}
                    </div>

                    {/* Buttons rechts - dynamisch aus CMS */}
                    <div className={styles.floorPanel}>
                        {maps.map((m) => (
                            <button
                                key={m._id}
                                type="button"
                                className={`${styles.floorBtn} ${
                                    selectedFloor === m.floor ? styles.floorBtnActive : ""
                                }`}
                                onClick={() => {
                                    setError("");
                                    setSelectedFloor(m.floor);
                                }}
                            >
                                {m.label || m.floor}
                            </button>
                        ))}
                        {maps.length === 0 && !loading && (
                            <div className={styles.noMaps}>Keine Pläne im CMS</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}