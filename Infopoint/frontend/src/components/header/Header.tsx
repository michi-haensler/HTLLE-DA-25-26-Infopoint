import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const links = [
  { to: '/', label: 'Home' },
  { to: '/info', label: 'Informationen' },
  { to: '/map', label: 'Lageplan' },
  { to: '/news', label: 'Aktuelles' },
  { to: '/insta', label: 'Insta' },
  { to: '/teachers', label: 'Lehrer' },
  { to: '/events', label: 'Termine' },
  { to: '/settings', label: 'Einstellungen' },
]

export default function Header() {
  const { pathname } = useLocation()
  return (
    <header className={styles.header}>
      <div className={styles.brand}>HTL <span>Leoben</span></div>
      <nav className={styles.nav}>
        {links.map(l => (
          <Link
            key={l.to}
            to={l.to}
            className={[styles.link, pathname === l.to ? styles.active : ''].join(' ')}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  )
}