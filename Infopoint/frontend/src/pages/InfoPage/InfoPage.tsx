import styles from "./InfoPage.module.css";

// Später: diese Daten vom CMS / Backend laden
type NewsItem = {
  id: string;
  title: string;
  detailUrl: string; // Link zum ganzen Artikel (CMS-URL oder interne Route)
};

const NEWS: NewsItem[] = [
  {
    id: "1",
    title: "Maturaball der 5. Klassen",
    detailUrl: "/news/1",
  },
  {
    id: "2",
    title: "Tag der Nachhaltigkeit",
    detailUrl: "/news/2",
  },
  {
    id: "3",
    title: "Kennenlerntage der 1. Klassen",
    detailUrl: "/news/3",
  },
  {
    id: "4",
    title: "Infotag",
    detailUrl: "/news/4",
  },
];

export default function NewsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Neuigkeiten</h1>

      <section className={styles.panel}>
        <ul className={styles.list}>
          {NEWS.map((item) => (
            <li key={item.id} className={styles.row}>
              <div className={styles.rowInner}>
                <span className={styles.text}>{item.title}</span>
              </div>

              {/* Pfeil rechts → führt zum ganzen Artikel */}
              <a
                href={item.detailUrl}
                className={styles.arrowButton}
                title="Zum Artikel"
              >
                <span className="material-icons">chevron_right</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}