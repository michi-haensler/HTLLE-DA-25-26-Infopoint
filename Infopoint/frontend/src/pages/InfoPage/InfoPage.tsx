import { useEffect, useState } from 'react'
import styles from './InfoPage.module.css'
import Loader from '../../shared/ui/Loader'
import ErrorBanner from '../../shared/ui/ErrorBanner'
import { useOnline } from '../../shared/hooks/useOnline'
import { fetchEvents, fetchRoomPlans, fetchSubstitutions,
  type EventItem, type RoomPlan, type Substitution } from '../../features/information/api/information.api'

export default function InfoPage() {
  const online = useOnline()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const [events, setEvents] = useState<EventItem[]>([])
  const [subs, setSubs] = useState<Substitution[]>([])
  const [rooms, setRooms] = useState<RoomPlan[]>([])

  useEffect(() => {
    let mounted = true;
    let safetyTimer: number | undefined;
  
    (async () => {
      try {
        setLoading(true);
  
        // Safety: Nach 4s beenden wir das Laden auf jeden Fall
        safetyTimer = window.setTimeout(() => {
          if (mounted) {
            setLoading(false);
            setError((prev) => prev ?? "Zeitüberschreitung beim Laden der Daten.");
          }
        }, 4000);
  
        const [e, s, r] = await Promise.all([
          fetchEvents(),
          fetchSubstitutions(),
          fetchRoomPlans(),
        ]);
  
        if (!mounted) return;
        setEvents(e);
        setSubs(s);
        setRooms(r);
        setError(null);
        setLoading(false);
      } catch {
        if (!mounted) return;
        setError("Daten konnten nicht geladen werden.");
        setLoading(false);
      } finally {
        if (safetyTimer) clearTimeout(safetyTimer);
      }
    })();
  
    return () => {
      mounted = false;
      if (safetyTimer) clearTimeout(safetyTimer);
    };
  }, []);

  return (
    <main className={styles.wrap}>
      <h1 className={styles.h1}>Informationen</h1>

      {!online && (
        <ErrorBanner message="Keine Internetverbindung – zeige lokale/letzte bekannte Daten." />
      )}

      {error && <ErrorBanner message={error} />}

      {loading ? (
        <Loader />
      ) : (
        <div className={styles.grid}>
          <section className={styles.card}>
            <h2 className={styles.title}>Aktuelle Veranstaltungen</h2>
            <ul className={styles.list}>
              {events.map(e => (
                <li key={e.id} className={styles.item}>
                  <div className={styles.primary}>{e.title}</div>
                  <div className={styles.meta}>{e.date}{e.location ? ` · ${e.location}` : ''}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.title}>Vertretungen</h2>
            <ul className={styles.list}>
              {subs.map(s => (
                <li key={s.id} className={styles.item}>
                  <div className={styles.primary}>{s.teacher}</div>
                  <div className={styles.meta}>{s.class} · {s.time}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.card}>
            <h2 className={styles.title}>Raumpläne</h2>
            <ul className={styles.list}>
              {rooms.map(r => (
                <li key={r.id} className={styles.item}>
                  <div className={styles.primary}>{r.room}</div>
                  <div className={styles.meta}>{r.info}</div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </main>
  )
}