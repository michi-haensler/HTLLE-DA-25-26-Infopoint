import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import styles from "./RootLayout.module.css";

export default function RootLayout() {
    return (
        <div className={styles.shell}>
            {/* Skip link for keyboard accessibility */}
            <a href="#main-content" className="skip-link">
                Zum Hauptinhalt springen
            </a>
            
            <Header />
            
            <main id="main-content" className={styles.content} tabIndex={-1}>
                <Outlet />
            </main>
        </div>
    );
}