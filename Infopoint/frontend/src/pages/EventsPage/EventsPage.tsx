import styles from "./EventsPage.module.css";

// Später: Diese Daten vom CMS laden (z.B. via fetch() aus eurem Backend)
type EventItem = {
  id: string;
  title: string;
  date: string;
  rightText: string;   // Uhrzeit, Ort oder Hinweis
  detailUrl: string;   // Link zum ganzen Artikel (CMS-URL oder interne Route)
};

const EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Maturaball",
    date: "25.10.2025",
    rightText: "19:30 Uhr",
    detailUrl: "/events/1", // Platzhalter – hier später CMS-URL / Detailseite
  },
  {
    id: "2",
    title: "Diplomarbeits Präsentationen",
    date: "12.11.2025",
    rightText: "MFR",
    detailUrl: "/events/2",
  },
  {
    id: "3",
    title: "Tag der offenen Tür",
    date: "21.11.2025",
    rightText: "von 11 - 17 Uhr",
    detailUrl: "/events/3",
  },
  {
    id: "4",
    title: "Elternsprechtag",
    date: "28.11.2025",
    rightText: "Anmeldung Untis",
    detailUrl: "/events/4",
  },
  {
    id: "5",
    title: "Weihnachtsferien",
    date: "24.12.2025",
    rightText: "",
    detailUrl: "/events/5",
  },
];

export default function EventsPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Termine</h1>

      <section className={styles.panel}>
        <ul className={styles.list}>
          {EVENTS.map((event) => (
            <li key={event.id} className={styles.row}>
              <div className={styles.rowInner}>
                <div className={styles.colLeft}>{event.title}</div>
                <div className={styles.colCenter}>{event.date}</div>
                <div className={styles.colRight}>{event.rightText}</div>
              </div>

              {/* Pfeil rechts → führt zum kompletten Artikel / Detailseite */}
              <a
                href={event.detailUrl}
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