import type { PropsWithChildren } from 'react';

import { LoginCarousel } from '@ui-auth/components/client/login-carousel';

import styles from './layout.module.css';

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main className={styles.base}>
      <section className={styles.base__carousel}>
        <LoginCarousel />
      </section>
      <div className={styles.base__body}>
        {children}
      </div>
    </main>
  );
}
