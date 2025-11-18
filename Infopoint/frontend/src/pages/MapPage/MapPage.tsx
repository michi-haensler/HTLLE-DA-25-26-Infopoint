import styles from "./MapPage.module.css";
import img1 from "../../assets/Map/Dummy1Stock.jpg";
import imgEG from "../../assets/Map/DummyErdgeschoss.png";
import imgKG from "../../assets/Map/DummyKeller.png";

export default function MapPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Lageplan</h2>

      <section className={styles.list}>
        <figure className={styles.card}>
          <img src={img1} alt="1. Stock" className={styles.image} />
          <figcaption className={styles.caption}>1. Stock</figcaption>
        </figure>

        <figure className={styles.card}>
          <img src={imgEG} alt="Erdgeschoss" className={styles.image} />
          <figcaption className={styles.caption}>Erdgeschoss</figcaption>
        </figure>

        <figure className={styles.card}>
          <img src={imgKG} alt="Keller" className={styles.image} />
          <figcaption className={styles.caption}>Keller</figcaption>
        </figure>
      </section>
    </main>
  );
}