import { useEffect, useState } from "react";
import styles from "./Screensaver.module.css";

type Props = {
  onClose: () => void;
};

const SLIDE_INTERVAL_MS = 8000; // 8 Sekunden pro Bild

// später: per CMS / API laden
const IMAGE_URLS: string[] = [
  "/screensaver/htl1.jpg",
  "/screensaver/htl2.jpg",
  "/screensaver/htl3.jpg",
];

export default function Screensaver({ onClose }: Props) {
  const [index, setIndex] = useState(0);

  // einfachen Bildwechsel-Loop aufsetzen
  useEffect(() => {
    if (IMAGE_URLS.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % IMAGE_URLS.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  const close = () => onClose();

  const currentImage =
    IMAGE_URLS.length > 0 ? IMAGE_URLS[index] : undefined;

  return (
    <div
      className={styles.overlay}
      onClick={close}
      role="button"
      aria-label="Screensaver schließen"
    >
      {/* Hintergrundbild */}
      {currentImage && (
        <div
          className={styles.background}
          style={{ backgroundImage: `url(${currentImage})` }}
        />
      )}

      {/* dunkle Ebene drüber, damit Text/Buttons lesbar bleiben */}
      <div className={styles.scrim} />

      {/* Button unten in der Mitte */}
      <button
        className={styles.cta}
        onClick={(e) => {
          e.stopPropagation(); // verhindert, dass der Overlay-Click ausgelöst wird
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