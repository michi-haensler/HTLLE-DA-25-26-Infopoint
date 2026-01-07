import { Outlet } from "react-router-dom";
import Header from "../components/header/Header"; // Pfad ggf. anpassen!
import styles from "./RootLayout.module.css";

export default function RootLayout() {
    return (
        <div className={styles.shell}>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    );
}