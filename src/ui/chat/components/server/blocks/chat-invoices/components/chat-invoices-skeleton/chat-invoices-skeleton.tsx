'use client';

import { useMemo } from 'react';

import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../../chat-invoices.module.css';

export const ChatInvoicesSkeleton = () => {
  const invoiceSkeletons = useMemo(
    () =>
      Array.from({ length: 5 }, () => crypto.randomUUID()).map((id) => {
        return <Skeleton className="h-[56px] w-full" key={id} />;
      }),
    [],
  );

  return (
    <>
      <div className={styles.base__header}>
        <div className={styles.base__info}>
          <Skeleton className="h-[20px] w-[min(136px,100%)]" />
          <Skeleton className="h-[20px] w-[min(55px,100%)]" />
        </div>
        <Separator />
      </div>
      <div className={styles.base__body}>
        <Skeleton className="h-[24px] w-[min(100px,100%)]" />
        <div className={styles.base__invoices}>{invoiceSkeletons}</div>
      </div>
    </>
  );
};
