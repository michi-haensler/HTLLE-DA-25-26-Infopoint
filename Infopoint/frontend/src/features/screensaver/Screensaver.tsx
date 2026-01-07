import styles from "./Screensaver.module.css";

type Props = {
    onStart: () => void;
};

export default function Screensaver({ onStart }: Props) {
    return (
        <div
            className={styles.overlay}
            onClick={onStart}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onStart();
            }}
        >
            <div className={styles.center}>
                <div className={styles.title}>Infopoint</div>
                <div className={styles.subtitle}>HTL Leoben</div>
            </div>

            <div className={styles.hint}>Zum Starten klicken</div>
        </div>
    );
}