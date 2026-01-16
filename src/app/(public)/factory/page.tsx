import type { Metadata } from 'next';

import { TicketList } from '@ui-ticket/components/client/blocks/ticket-list';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gforce - Factory',
  description: 'Gforce Factory',
};

export default function FactoryPage() {
  return (
    <main className={styles.base}>
      <TicketList title="Tickets de Prueba" contactId="b0c6e5b4-2abe-48db-85bb-577aead261a5" />
    </main>
  );
}
