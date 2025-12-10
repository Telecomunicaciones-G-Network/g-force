'use client';

import { useMemo } from 'react';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../../chat-history.module.css';

export const ChatHistorySkeleton = () => {
  const noteSkeletons = useMemo(() => {
    return Array.from({ length: 5 }, () => (
      <Skeleton className="h-[136px] w-full" key={crypto.randomUUID()} />
    ));
  }, []);

  return (
    <div className={styles.base}>
      <Skeleton className="h-6 w-[min(263px,100%)]" />
      <div className={styles.base__elements}>{noteSkeletons}</div>
    </div>
  );
};
