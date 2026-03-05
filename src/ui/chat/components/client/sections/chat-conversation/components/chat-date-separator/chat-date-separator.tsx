import styles from './chat-date-separator.module.css';

interface ChatDateSeparatorProps {
  label: string;
}

export const ChatDateSeparator = ({ label }: ChatDateSeparatorProps) => (
  <div className={styles.base}>
    <div className={styles.base__line} />
    <span className={styles.base__label}>{label}</span>
    <div className={styles.base__line} />
  </div>
);
