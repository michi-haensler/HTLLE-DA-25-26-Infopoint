import styles from "./StundenplanPage.module.css";

export default function StundenplanPage() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Stundenpläne</h2>

      <section className={styles.grid}>
        <div className={styles.card}>
          <h3>Unterstufe</h3>
          <p className={styles.text}>
            Hier können die Stundenpläne der 1.–4. Klassen angezeigt werden.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Oberstufe</h3>
          <p className={styles.text}>
            Hier können die Stundenpläne der höheren Jahrgänge angezeigt werden.
          </p>
        </div>
        <div className={styles.card}>
          <h3>Lehrer-Stundenpläne</h3>
          <p className={styles.text}>
            Übersicht über die Stundenpläne der Lehrkräfte.
          </p>
        </div>
      </section>
    </main>
  );
}