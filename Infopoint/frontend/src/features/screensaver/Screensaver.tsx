import { useState } from "react";
import styles from "./Screensaver.module.css";

export default function Screensaver() {
  const [active, setActive] = useState(true);

  if (!active) return null;

  const close = () => setActive(false);

  return (
    <div
      className={styles.overlay}
      onClick={close}
      role="button"
      aria-label="Screensaver schließen"
    >
      {/* optional: zentriertes Logo/Motiv */}
      {/* <div className={styles.center}>HTL Leoben</div> */}

      {/* Button: stoppt das Overlay-Click-Event, damit der Fokus sauber bleibt */}
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