'use client';

import type { Ticket } from '@module-ticket/domain/interfaces';
import type { TicketCardListProps } from './ticket-card-list.props';

import { TicketCard } from '@ui-ticket/components/client/cards/ticket-card';

import { TicketCardListEmpty } from './components/ticket-card-list-empty';
import { TicketCardListErrorBoundary } from './components/ticket-card-list-error-boundary';
import { TicketCardListSkeleton } from './components/ticket-card-list-skeleton';

import { useTicketCardList } from './ticket-card-list.hook';

import styles from './ticket-card-list.module.css';

/**
 * @name TicketCardList
 *
 * @description Component to display a list of tickets.
 *
 * @property {TicketCardListProps} props - The props for the component.
 */
export const TicketCardList = ({
  error = false,
  loading = false,
  tickets = [],
}: TicketCardListProps) => {
  const { openTicketId, setOpenTicketId } = useTicketCardList();

  return (
    <>
      {loading && <TicketCardListSkeleton />}
      {error && !loading && <TicketCardListErrorBoundary />}
      {!error && !loading && (
        <>
          {tickets?.length === 0 && <TicketCardListEmpty />}
          <div className={styles.base}>
            {tickets?.length > 0 && (
              <div className={styles.base__items}>
                {tickets?.map((ticket: Ticket) => (
                  <TicketCard
                    key={ticket?.id}
                    isTicketModalOpen={openTicketId === ticket?.id}
                    onOpenTicketModal={(open) =>
                      setOpenTicketId(open ? ticket?.id : null)
                    }
                    ticket={ticket}
                  />
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};
