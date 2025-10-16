import { Link } from 'react-router-dom'
import styles from './Card.module.css'

type Props = { title: string; to?: string; children?: React.ReactNode }

export default function Card({ title, to, children }: Props) {
  const Comp: any = to ? Link : 'div'
  return (
    <Comp to={to} className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{children ?? <div className={styles.placeholder} />}</div>
    </Comp>
  )
}