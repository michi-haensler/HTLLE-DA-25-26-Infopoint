import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    const location = useLocation();

    const isActive = (path: string) =>
        location.pathname === path || location.pathname.startsWith(path + "/");

    return (
        <header className={styles.header}>
            {/* LINKS: Logo + Navigation */}
            <div className={styles.left}>
                <div className={styles.brand}>
                    <span className={styles.htl}>HTL</span>
                    <span className={styles.leoben}>Leoben</span>
                </div>

                <nav className={styles.nav}>
                    <Link to="/info" className={`${styles.navLink} ${isActive("/info") ? styles.active : ""}`}>
                        Neuigkeiten
                    </Link>
                    <Link to="/map" className={`${styles.navLink} ${isActive("/map") ? styles.active : ""}`}>
                        Lageplan
                    </Link>
                    <Link to="/events" className={`${styles.navLink} ${isActive("/events") ? styles.active : ""}`}>
                        Termine
                    </Link>
                    <Link to="/teachers" className={`${styles.navLink} ${isActive("/teachers") ? styles.active : ""}`}>
                        Lehrer finden
                    </Link>
                    <Link
                        to="/stundenplan"
                        className={`${styles.navLink} ${isActive("/stundenplan") ? styles.active : ""}`}
                    >
                        Stundenpläne
                    </Link>
                    <Link to="/insta" className={`${styles.navLink} ${isActive("/insta") ? styles.active : ""}`}>
                        Instagram
                    </Link>
                </nav>
            </div>

            {/* RECHTS: Home Icon */}
            <Link to="/" className={styles.home} title="Home">
                <span className="material-icons">home</span>
            </Link>
        </header>
    );
}