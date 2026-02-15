import styles from './Loader.module.css';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function Loader({ size = 'md', text = 'Lädt …', fullScreen = false }: LoaderProps) {
  return (
    <div className={`${styles.loader} ${fullScreen ? styles.fullScreen : ''}`}>
      <div className={`${styles.spinner} ${styles[size]}`}>
        <span className="material-icons">sync</span>
      </div>
      {text && <span className={styles.text}>{text}</span>}
    </div>
  );
}