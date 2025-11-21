import { useState, useMemo } from "react";
import styles from "./TeachersPage.module.css";

// Später: diese Daten vom CMS / Backend laden
type Teacher = {
  id: string;
  name: string;
  shortcut: string; // Kürzel
  room: string;
};

const TEACHERS: Teacher[] = [
  { id: "1", name: "Kondert Uwe", shortcut: "KUW", room: "5BIT" },
  { id: "2", name: "Hochörtler Beatrix", shortcut: "HBX", room: "5RL" },
  { id: "3", name: "Edler Astrid", shortcut: "ED", room: "---" },
  { id: "4", name: "Auracher Klaus", shortcut: "AUK", room: "4AIT" },
];

export default function TeachersPage() {
  const [query, setQuery] = useState("");

  const filteredTeachers = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return TEACHERS;
    return TEACHERS.filter((t) =>
      (t.name + t.shortcut + t.room).toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Lehrer Suche</h1>

      {/* Suchfeld */}
      <div className={styles.searchBar}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Namen oder Kürzel eingeben"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className={`material-icons ${styles.searchIcon}`}>search</span>
      </div>

      {/* Ergebnis-Liste */}
      <section className={styles.panel}>
        <ul className={styles.list}>
          {filteredTeachers.map((t) => (
            <li key={t.id} className={styles.row}>
              <div className={styles.colName}>{t.name}</div>
              <div className={styles.colShortcut}>{t.shortcut}</div>
              <div className={styles.colRoom}>Raum: {t.room}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}