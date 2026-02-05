import { useMemo, useState } from "react";
import styles from "./MapPage.module.css";

type Floor = "OG1" | "EG" | "KE";

export default function MapPage() {
    // Default: 1. Stock
    const [floor, setFloor] = useState<Floor>("OG1");
    const [error, setError] = useState("");

    // 👉 Hier kannst du später echte Endpoints pro Stockwerk verwenden
    // z.B. `/api/v1/map/image?floor=OG1`
    const imgSrc = useMemo(() => {
        switch (floor) {
            case "OG1":
                return `/api/v1/map/image`; // aktuell: dein Endpoint
            case "EG":
                return `/api/v1/map/image`; // placeholder: später eigener Endpoint
            case "KE":
                return `/api/v1/map/image`; // placeholder: später eigener Endpoint
            default:
                return `/api/v1/map/image`;
        }
    }, [floor]);

    const floorLabel = (f: Floor) => {
        if (f === "OG1") return "1. St";
        if (f === "EG") return "EG";
        return "KE";
    };

    return (
        <div className={styles.page}>
            <h1 className={styles.title}>Lageplan</h1>

            <div className={styles.card}>
                <div className={styles.content}>
                    {/* Bild */}
                    <div className={styles.mapArea}>
                        <img
                            className={styles.mapImage}
                            src={imgSrc}
                            alt={`Lageplan ${floorLabel(floor)}`}
                            onError={() =>
                                setError("Lageplan konnte nicht geladen werden (Backend/CORS/CMS?)")
                            }
                        />

                        {error && <div className={styles.errorBox}>{error}</div>}
                    </div>

                    {/* Buttons rechts */}
                    <div className={styles.floorPanel}>
                        <button
                            type="button"
                            className={`${styles.floorBtn} ${
                                floor === "OG1" ? styles.floorBtnActive : ""
                            }`}
                            onClick={() => {
                                setError("");
                                setFloor("OG1");
                            }}
                        >
                            1. St
                        </button>

                        <button
                            type="button"
                            className={`${styles.floorBtn} ${
                                floor === "EG" ? styles.floorBtnActive : ""
                            }`}
                            onClick={() => {
                                setError("");
                                setFloor("EG");
                            }}
                        >
                            EG
                        </button>

                        <button
                            type="button"
                            className={`${styles.floorBtn} ${
                                floor === "KE" ? styles.floorBtnActive : ""
                            }`}
                            onClick={() => {
                                setError("");
                                setFloor("KE");
                            }}
                        >
                            KE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}