import { useState } from "react";
import styles from "./MapPage.module.css";

// Später könnt ihr diese Daten aus eurem CMS laden (z. B. via fetch)
type FloorId = "FIRST" | "GROUND" | "BASEMENT";

type Floor = {
  id: FloorId;
  label: string;      // Text im Button (z. B. "1. St")
  alt: string;        // Alternativtext fürs Bild
  imageUrl: string;   // URL vom CMS oder aus /assets
};

const FLOORS: Floor[] = [
  {
    id: "FIRST",
    label: "1. St",
    alt: "Lageplan 1. Stock",
    imageUrl: "/maps/stock-1.jpg", // z.B. aus public/maps oder CMS-URL
  },
  {
    id: "GROUND",
    label: "EG",
    alt: "Lageplan Erdgeschoss",
    imageUrl: "/maps/erdgeschoss.jpg",
  },
  {
    id: "BASEMENT",
    label: "KE",
    alt: "Lageplan Keller",
    imageUrl: "/maps/keller.jpg",
  },
];

export default function MapPage() {
  const [activeFloorId, setActiveFloorId] = useState<FloorId>("FIRST");

  const activeFloor =
    FLOORS.find((floor) => floor.id === activeFloorId) ?? FLOORS[0];

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Lageplan</h2>

      <section className={styles.content}>
        {/* Bildbereich links */}
        <div className={styles.imageWrap}>
          <img
            src={activeFloor.imageUrl}
            alt={activeFloor.alt}
            className={styles.image}
          />
        </div>

        {/* Stockwerk-Buttons rechts */}
        <aside className={styles.sidebar}>
          {FLOORS.map((floor) => (
            <button
              key={floor.id}
              type="button"
              className={`${styles.floorButton} ${
                floor.id === activeFloorId ? styles.floorButtonActive : ""
              }`}
              onClick={() => setActiveFloorId(floor.id)}
            >
              <span className={styles.floorLabel}>{floor.label}</span>
            </button>
          ))}
        </aside>
      </section>
    </main>
  );
}