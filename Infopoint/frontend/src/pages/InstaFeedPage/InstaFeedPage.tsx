import { useEffect } from "react";
import styles from "./InstaFeedPage.module.css";

export default function InstaFeedPage() {
  useEffect(() => {
    // Instagram-Embed-Skript nachladen
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Instagram – HTL Leoben</h2>

      <div className={styles.embedWrapper}>
        {/* Hier das von dir gegebene Embed-HTML */}
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/htlleoben/"
          data-instgrm-version="12"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow:
              "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px auto",
            maxWidth: "800px",
            minWidth: "750px",
            padding: 0,
            width: "99%",
          }}
        ></blockquote>
      </div>
    </main>
  );
}