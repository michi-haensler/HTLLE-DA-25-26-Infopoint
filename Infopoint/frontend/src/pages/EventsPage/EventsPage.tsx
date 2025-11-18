import styles from "./EventsPage.module.css";

type EventItem = { id: string; title: string; date: string; location: string };

const events: EventItem[] = [
  { id: "e1", title: "Schularbeit Mathematik", date: "18.11.2025", location: "3A/BIT" },
  { id: "e2", title: "Konferenz", date: "25.11.2025", location: "Lehrerzimmer" },
  { id: "e3", title: "Projektpräsentation 5. Klassen", date: "05.12.2025", location: "Aula" },
];

export default function EventsPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Termine</h2>

      <section className={styles.list}>
        {events.map((e) => (
          <article key={e.id} className={styles.item}>
            <div className={styles.date}>
              <span className="material-icons">event</span>
              <span>{e.date}</span>
            </div>
            <div className={styles.mainRow}>
              <div className={styles.name}>{e.title}</div>
              <div className={styles.location}>
                <span className="material-icons">place</span>
                <span>{e.location}</span>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}