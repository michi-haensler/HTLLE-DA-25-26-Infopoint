import { Link } from "react-router-dom";
import styles from "./StundenplanPage.module.css";

export default function StundenplanPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Stundenpläne</h1>

      <section className={styles.grid}>
        {/* Klassenstundenpläne */}
        <Link to="/stundenplan/klassen" className={styles.card}>
          <div className={styles.iconCircle}>
            {/* Icon kannst du nach Geschmack ändern */}
            <span className="material-icons">groups</span>
          </div>
          <div className={styles.label}>Klassenstundenpläne</div>
        </Link>

        {/* Laborstundenpläne */}
        <Link to="/stundenplan/labore" className={styles.card}>
          <div className={styles.iconCircle}>
            <span className="material-icons">science</span>
          </div>
          <div className={styles.label}>Laborstundenpläne</div>
        </Link>
      </section>
    </main>
  );
}