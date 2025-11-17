import styles from "./Screensaver.module.css";

type Props = {
  onClose: () => void;
};

export default function Screensaver({ onClose }: Props) {
  const close = () => onClose();

  return (
    <div
      className={styles.overlay}
      onClick={close}
      role="button"
      aria-label="Screensaver schließen"
    >
      <button
        className={styles.cta}
        onClick={(e) => {
          e.stopPropagation();
          close();
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.stopPropagation();
            close();
          }
        }}
      >
        Zum Starten klicken
      </button>
    </div>
  );
}