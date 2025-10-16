import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className={styles.header}>
      {/* Logo links */}
      <div className={styles.logo}>
        <strong>HTL</strong> <span className={styles.highlight}>Leoben</span>
      </div>

      {/* Navigation – bleibt unverändert */}
      <nav className={styles.nav}>
        <Link
          to="/"
          className={`${styles.navLink} ${
            location.pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </Link>
        <Link
          to="/events"
          className={`${styles.navLink} ${
            location.pathname === "/events" ? styles.active : ""
          }`}
        >
          Events
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
          to="/news"
          className={`${styles.navLink} ${
            location.pathname === "/news" ? styles.active : ""
          }`}
        >
          News
        </Link>
        <Link
          to="/insta"
          className={`${styles.navLink} ${
            location.pathname === "/insta" ? styles.active : ""
          }`}
        >
          Insta
        </Link>
        <Link
          to="/teachers"
          className={`${styles.navLink} ${
            location.pathname === "/teachers" ? styles.active : ""
          }`}
        >
          Lehrer
        </Link>

        {/* 🧭 NEU: Settings-Icon ganz rechts */}
        <Link
          to="/settings"
          className={`${styles.settingsIcon} ${
            location.pathname === "/settings" ? styles.active : ""
          }`}
          title="Einstellungen"
        >
          <span className="material-icons">settings</span>
        </Link>
      </nav>
    </header>
  );
}