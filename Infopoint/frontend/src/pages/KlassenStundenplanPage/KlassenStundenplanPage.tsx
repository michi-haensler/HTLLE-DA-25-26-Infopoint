import styles from "./KlassenStundenplanPage.module.css";

// später: vom CMS laden
type ClassPlan = {
  id: string;
  className: string;
  schoolYear: string;
  planUrl: string;   // Link zum PDF / Bild / Detailseite
};

const CLASS_PLANS: ClassPlan[] = [
  {
    id: "1",
    className: "1A BIT",
    schoolYear: "2025/26",
    planUrl: "/cms/plaene/1abit.pdf",
  },
  {
    id: "2",
    className: "3AHW",
    schoolYear: "2025/26",
    planUrl: "/cms/plaene/3ahw.pdf",
  },
  {
    id: "3",
    className: "5BHWIN",
    schoolYear: "2025/26",
    planUrl: "/cms/plaene/5bhwin.pdf",
  },
];

export default function KlassenStundenplanPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Klassenstundenpläne</h1>

      <section className={styles.panel}>
        <ul className={styles.list}>
          {CLASS_PLANS.map((plan) => (
            <li key={plan.id} className={styles.row}>
              <div className={styles.rowInner}>
                <span className={styles.colClass}>{plan.className}</span>
                <span className={styles.colYear}>{plan.schoolYear}</span>
              </div>

              {/* Pfeil → öffnet Plan / Detailseite aus dem CMS */}
              <a
                href={plan.planUrl}
                className={styles.arrowButton}
                target="_blank"
                rel="noreferrer"
                title="Stundenplan anzeigen"
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