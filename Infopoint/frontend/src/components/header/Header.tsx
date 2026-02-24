import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    const isActive = (path: string) =>
        location.pathname === path || location.pathname.startsWith(path + "/");

    const navLinks = [
        { to: "/info", label: "Neuigkeiten" },
        { to: "/map", label: "Lageplan" },
        { to: "/events", label: "Termine" },
        { to: "/teachers", label: "Lehrer finden" },
        { to: "/stundenplan", label: "Stundenpläne" },
        { to: "/insta", label: "Instagram" },
    ];

    return (
        <header className={styles.header} data-secret-trigger="header">
            {/* LINKS: Logo + Navigation */}
            <div className={styles.left}>
                <Link to="/" className={styles.brand} aria-label="HTL Leoben - Startseite">
                    <span className={styles.htl}>HTL</span>
                    <span className={styles.leoben}>Leoben</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav} aria-label="Hauptnavigation">
                    {navLinks.map(link => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={`${styles.navLink} ${isActive(link.to) ? styles.active : ""}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
                className={styles.menuToggle}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            >
                <span className="material-icons">
                    {menuOpen ? 'close' : 'menu'}
                </span>
            </button>

            {/* Mobile Navigation */}
            <nav 
                id="mobile-menu"
                className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
                aria-label="Mobile Navigation"
            >
                <Link to="/" className={styles.mobileNavLink}>
                    <span className="material-icons">home</span>
                    Startseite
                </Link>
                {navLinks.map(link => (
                    <Link
                        key={link.to}
                        to={link.to}
                        className={`${styles.mobileNavLink} ${isActive(link.to) ? styles.mobileActive : ""}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Backdrop for mobile menu */}
            {menuOpen && (
                <div 
                    className={styles.backdrop} 
                    onClick={() => setMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            {/* RECHTS: Home Icon (Desktop only) */}
            <Link to="/" className={styles.home} title="Home" aria-label="Zur Startseite">
                <span className="material-icons">home</span>
            </Link>
        </header>
    );
}
