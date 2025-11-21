import styles from "./LaborStundenplanPage.module.css";

// später: vom CMS laden
type LabPlan = {
  id: string;
  labName: string;
  room: string;
  planUrl: string;
};

const LAB_PLANS: LabPlan[] = [
  {
    id: "1",
    labName: "Elektronik-Labor",
    room: "E-210",
    planUrl: "/cms/labore/elektronik.pdf",
  },
  {
    id: "2",
    labName: "Informatik-Labor",
    room: "E-112",
    planUrl: "/cms/labore/informatik.pdf",
  },
  {
    id: "3",
    labName: "Mechatronik-Labor",
    room: "M-105",
    planUrl: "/cms/labore/mechatronik.pdf",
  },
];

export default function LaborStundenplanPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Laborstundenpläne</h1>

      <section className={styles.panel}>
        <ul className={styles.list}>
          {LAB_PLANS.map((lab) => (
            <li key={lab.id} className={styles.row}>
              <div className={styles.rowInner}>
                <span className={styles.colLab}>{lab.labName}</span>
                <span className={styles.colRoom}>Raum: {lab.room}</span>
              </div>

              <a
                href={lab.planUrl}
                className={styles.arrowButton}
                target="_blank"
                rel="noreferrer"
                title="Laborstundenplan anzeigen"
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