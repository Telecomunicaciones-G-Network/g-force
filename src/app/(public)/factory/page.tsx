import type { Metadata } from 'next';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'G-Force - Factory',
  description: 'G-Force Factory',
};

export default function FactoryPage() {
  return <div className={styles.base}>Mount your component here</div>;
}
