import styles from "./InfoPage.module.css";

type NewsItem = { id: string; title: string; date: string; teaser: string };

const dummyNews: NewsItem[] = [
  {
    id: "n1",
    title: "HTL Leoben gewinnt Robotics-Wettbewerb",
    date: "15.11.2025",
    teaser: "Das Team der 4A/BIT holt den ersten Platz beim Landesbewerb …",
  },
  {
    id: "n2",
    title: "Neuer 3D-Drucker im Labor",
    date: "10.11.2025",
    teaser: "Ab sofort steht der Schule ein weiterer 3D-Drucker für Projekte zur Verfügung.",
  },
];

export default function NewsPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Aktuelles</h2>

      <section className={styles.grid}>
        {dummyNews.map((n) => (
          <article key={n.id} className={styles.card}>
            <div className={styles.date}>{n.date}</div>
            <h3 className={styles.headline}>{n.title}</h3>
            <p className={styles.teaser}>{n.teaser}</p>
          </article>
        ))}
      </section>
    </main>
  );
}