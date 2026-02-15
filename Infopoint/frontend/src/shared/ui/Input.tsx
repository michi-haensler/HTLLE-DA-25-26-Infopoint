import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: string;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, fullWidth = false, className = '', id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    
    return (
      <div className={`${styles.wrapper} ${fullWidth ? styles.fullWidth : ''} ${className}`}>
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}
        <div className={`${styles.inputWrapper} ${error ? styles.hasError : ''}`}>
          {icon && (
            <span className={`material-icons ${styles.icon}`}>{icon}</span>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`${styles.input} ${icon ? styles.hasIcon : ''}`}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
        </div>
        {error && (
          <span id={`${inputId}-error`} className={styles.error} role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
