// CHECKED:

import type { Metadata } from 'next';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gforce - Factory',
  description: 'Gforce Factory',
};

export default function FactoryPage() {
  return <main className={styles.base}>Mount your component here</main>;
}
