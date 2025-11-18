import { useState } from "react";
import styles from "./TeachersPage.module.css";

type Teacher = { id: string; name: string; subject: string; room: string };

const teachers: Teacher[] = [
  { id: "t1", name: "Mag. Huber", subject: "Mathematik", room: "B-204" },
  { id: "t2", name: "DI Mayer", subject: "Informatik", room: "E-112" },
  { id: "t3", name: "Ing. Steiner", subject: "Elektronik", room: "E-210" },
];

export default function TeachersPage() {
  const [query, setQuery] = useState("");

  const filtered = teachers.filter((t) =>
    (t.name + t.subject + t.room).toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Lehrer finden</h2>

      <div className={styles.searchRow}>
        <span className="material-icons">search</span>
        <input
          type="text"
          placeholder="Name, Fach oder Raum eingeben"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.input}
        />
      </div>

      <section className={styles.grid}>
        {filtered.map((t) => (
          <article key={t.id} className={styles.card}>
            <h3 className={styles.name}>{t.name}</h3>
            <div className={styles.meta}>
              <span className="material-icons">school</span>
              <span>{t.subject}</span>
            </div>
            <div className={styles.meta}>
              <span className="material-icons">meeting_room</span>
              <span>{t.room}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}