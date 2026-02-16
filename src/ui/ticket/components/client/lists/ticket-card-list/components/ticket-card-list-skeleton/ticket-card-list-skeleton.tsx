'use client';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../../ticket-card-list.module.css';

/**
 * @name TicketCardListSkeleton
 *
 * @description Component to display a skeleton for the ticket card list.
 */
export const TicketCardListSkeleton = () => {
  const ticketSkeletons = Array.from({ length: 5 }, () =>
    crypto.randomUUID(),
  ).map((id) => {
    return <Skeleton className="h-[124px] w-full" key={id} />;
  });

  return (
    <div className={styles.base}>
      <div className={styles.base__items}>{ticketSkeletons}</div>
    </div>
  );
};
