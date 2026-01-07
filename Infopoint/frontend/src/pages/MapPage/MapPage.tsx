import { useMemo, useState } from "react";
import styles from "./MapPage.module.css";

type Floor = "OG1" | "EG" | "KE";

export default function MapPage() {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL;

    // Default: 1. Stock
    const [floor, setFloor] = useState<Floor>("OG1");
    const [error, setError] = useState("");

    // 👉 Hier kannst du später echte Endpoints pro Stockwerk verwenden
    // z.B. `${BASE_URL}/api/v1/map/image?floor=OG1`
    const imgSrc = useMemo(() => {
        if (!BASE_URL) return "";
        switch (floor) {
            case "OG1":
                return `${BASE_URL}/api/v1/map/image`; // aktuell: dein Endpoint
            case "EG":
                return `${BASE_URL}/api/v1/map/image`; // placeholder: später eigener Endpoint
            case "KE":
                return `${BASE_URL}/api/v1/map/image`; // placeholder: später eigener Endpoint
            default:
                return `${BASE_URL}/api/v1/map/image`;
        }
    }, [BASE_URL, floor]);

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
                        {!BASE_URL && (
                            <div className={styles.errorBox}>
                                VITE_API_BASE_URL ist nicht gesetzt
                            </div>
                        )}

                        {BASE_URL && (
                            <img
                                className={styles.mapImage}
                                src={imgSrc}
                                alt={`Lageplan ${floorLabel(floor)}`}
                                onError={() =>
                                    setError("Lageplan konnte nicht geladen werden (Backend/CORS/CMS?)")
                                }
                            />
                        )}

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