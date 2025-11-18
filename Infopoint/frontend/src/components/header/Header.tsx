import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { useScreensaver } from "../../features/screensaver/ScreensaverContext";

export default function Header() {
  const location = useLocation();
  const { show } = useScreensaver();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <strong>HTL</strong>
        <span className={styles.highlight}>Leoben</span>
      </div>

      <nav className={styles.nav}>
        <Link
          to="/info"
          className={`${styles.navLink} ${
            location.pathname === "/info" ? styles.active : ""
          }`}
        >
          Neuigkeiten
        </Link>
        <Link
          to="/map"
          className={`${styles.navLink} ${
            location.pathname === "/map" ? styles.active : ""
          }`}
        >
          Lageplan
        </Link>
        <Link
          to="/events"
          className={`${styles.navLink} ${
            location.pathname === "/events" ? styles.active : ""
          }`}
        >
          Termine
        </Link>
        <Link
          to="/teachers"
          className={`${styles.navLink} ${
            location.pathname === "/teachers" ? styles.active : ""
          }`}
        >
          Lehrer finden
        </Link>
        <Link
          to="/stundenplan"
          className={`${styles.navLink} ${
            location.pathname === "/stundenplan" ? styles.active : ""
          }`}
        >
          Stundenpläne
        </Link>
        <Link
          to="/insta"
          className={`${styles.navLink} ${
            location.pathname === "/insta" ? styles.active : ""
          }`}
        >
          Instagram
        </Link>

        <button
          type="button"
          className={styles.exitIcon}
          title="Zum Startbildschirm"
          onClick={show}
        >
          <span className="material-icons">exit_to_app</span>
        </button>
      </nav>
    </header>
  );
}