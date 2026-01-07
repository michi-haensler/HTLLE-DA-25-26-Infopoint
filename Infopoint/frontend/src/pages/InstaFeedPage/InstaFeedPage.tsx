import { useEffect } from "react";
import styles from "./InstaFeedPage.module.css";

declare global {
    interface Window {
        instgrm?: { Embeds?: { process?: () => void } };
    }
}

const SCRIPT_SRC = "https://www.instagram.com/embed.js";

export default function InstaFeedPage() {
    useEffect(() => {
        const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`) as HTMLScriptElement | null;

        const process = () => window.instgrm?.Embeds?.process?.();

        if (existing) {
            process();
            return;
        }

        const script = document.createElement("script");
        script.src = SCRIPT_SRC;
        script.async = true;
        script.onload = process;
        document.body.appendChild(script);

        // ⚠️ NICHT entfernen! Sonst bricht es beim Pagewechsel oft wieder.
    }, []);

    // Bei jedem Render/Route-Wechsel nochmal anstoßen
    useEffect(() => {
        window.instgrm?.Embeds?.process?.();
    });

    return (
        <main className={styles.container}>
            <h1 className={styles.title}>Instagram</h1>

            <div className={styles.embedWrapper}>
                <blockquote
                    className="instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/htlleoben/"
                    data-instgrm-version="14"
                />
            </div>
        </main>
    );
}