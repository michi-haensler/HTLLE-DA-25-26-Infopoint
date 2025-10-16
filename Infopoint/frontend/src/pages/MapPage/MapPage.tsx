import styles from "./MapPage.module.css";

// Bildmodule importieren (siehe Ordnerstruktur oben)
import img1 from '../../assets/Map/Dummy1Stock.jpg';      // 1. Stock
import imgEG from "../../assets/Map/DummyErdgeschoss.png"; // Erdgeschoss
import imgKG from "../../assets/Map/DummyKeller.png";      // Keller

export default function MapPage() {
  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Lageplan</h1>

      {/* Reihenfolge: 1. Stock → Erdgeschoss → Keller */}
      <section className={styles.list}>
        <figure className={styles.card}>
        <figcaption className={styles.caption}>1. Stock</figcaption>
          <a href={img1} target="_blank" rel="noreferrer">
            <img src={img1} alt="1. Stock" loading="lazy" className={styles.image} />
          </a>
        </figure>

        <figure className={styles.card}>
        <figcaption className={styles.caption}>Erdgeschoss</figcaption>
          <a href={imgEG} target="_blank" rel="noreferrer">
            <img src={imgEG} alt="Erdgeschoss" loading="lazy" className={styles.image} />
          </a>
        </figure>

        <figure className={styles.card}>
        <figcaption className={styles.caption}>Keller</figcaption>
          <a href={imgKG} target="_blank" rel="noreferrer">
            <img src={imgKG} alt="Keller" loading="lazy" className={styles.image} />
          </a>
        </figure>
      </section>
    </main>
  );
}