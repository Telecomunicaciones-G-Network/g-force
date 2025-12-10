'use client';

import { useMemo } from 'react';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../../chat-tickets.module.css';

export const ChatTicketsSkeletons = () => {
  const ticketSkeletons = useMemo(
    () =>
      Array.from({ length: 5 }, () => crypto.randomUUID()).map((id) => {
        return <Skeleton className="h-[124px] w-full" key={id} />;
      }),
    [],
  );

  return (
    <div className={styles.base}>
      <Skeleton className="h-6 w-[min(263px,100%)]" />
      <div className={styles.base__elements}>{ticketSkeletons}</div>
    </div>
  );
};
