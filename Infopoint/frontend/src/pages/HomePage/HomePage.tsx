import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Informations Portal</h1>
        <p className={styles.subtitle}>Alle Informationen auf einen Blick</p>
      </section>

      <section className={styles.grid}>
        <Link to="/news" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">article</span>
          </div>
          <div className={styles.cardLabel}>Neuigkeiten</div>
        </Link>

        <Link to="/map" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">map</span>
          </div>
          <div className={styles.cardLabel}>Lageplan</div>
        </Link>

        <Link to="/events" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">event</span>
          </div>
          <div className={styles.cardLabel}>Termine</div>
        </Link>

        <Link to="/teachers" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">person_search</span>
          </div>
          <div className={styles.cardLabel}>Lehrer finden</div>
        </Link>

        <Link to="/stundenplan" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">view_week</span>
          </div>
          <div className={styles.cardLabel}>Stundenplan</div>
        </Link>

        <Link to="/insta" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">photo_camera</span>
          </div>
          <div className={styles.cardLabel}>Instagram</div>
        </Link>
      </section>
    </main>
  );
}