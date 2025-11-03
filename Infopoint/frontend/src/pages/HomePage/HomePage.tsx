import styles from "./HomePage.module.css";
import Card from "../../components/Card/Card";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Informations Portal</h1>
      <h2 className={styles.subtitle}>Alle Informationen auf einen Blick</h2>
      
      {/* 3 × 2 Karten, feste Reihenfolge */}
      <section className={styles.grid}>
        {/* Reihe 1 */}
        <Card title="Events" to="/events" />
        <Card title="Lageplan" to="/map" />
        <Card title="News" to="/news" />

        {/* Reihe 2 */}
        <Card title="Insta" to="/insta" />
        <Card title="Lehrer" to="/teachers" />
        <Card title="Einstellungen" to="/settings" />
      </section>
    </main>
  );
}