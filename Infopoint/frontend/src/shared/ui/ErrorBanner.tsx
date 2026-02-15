import styles from './ErrorBanner.module.css';

interface ErrorBannerProps {
  message: string;
  title?: string;
  onRetry?: () => void;
}

export default function ErrorBanner({ message, title = 'Fehler', onRetry }: ErrorBannerProps) {
  return (
    <div className={styles.banner} role="alert">
      <div className={styles.header}>
        <span className={`material-icons ${styles.icon}`}>error_outline</span>
        <span className={styles.title}>{title}</span>
      </div>
      <p className={styles.message}>{message}</p>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          <span className="material-icons">refresh</span>
          Erneut versuchen
        </button>
      )}
    </div>
  );
}