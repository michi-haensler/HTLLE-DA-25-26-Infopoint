import styles from './HomePage.module.css'
import Card from '../../components/Card/Card'

export default function HomePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Informationsportal</h1>
      <section className={styles.grid}>
        <Card title="Informationen" to="/info" />
        <Card title="Lageplan" to="/map" />
        <Card title="Aktuelles" to="/news" />
        <Card title="Insta Feed" to="/insta" />
        <Card title="Lehrer finden" to="/teachers" />
        <Card title="Anstehende Termine" to="/events" />
        <Card title="Einstellungen" to="/settings" />
      </section>
    </main>
  )
}