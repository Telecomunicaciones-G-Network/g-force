'use client';

import { useMemo } from 'react';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../../chat-contracts.module.css';

export const ChatContractsSkeletons = () => {
  const contractSkeletons = useMemo(
    () =>
      Array.from({ length: 5 }, () => crypto.randomUUID()).map((id) => {
        return <Skeleton className="h-[56px] w-full" key={id} />;
      }),
    [],
  );

  return <div className={styles.base}> {contractSkeletons}</div>;
};
