import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from './contact-card-skeleton.module.css';

export const ContactCardSkeleton = () => (
  <div className={styles.base}>
    <div className={styles.base__container}>
      <Skeleton className="h-[48px] w-[48px]" />
      <div className={styles.base__content}>
        <div className={styles.base__texts}>
          <Skeleton className="h-[20px] w-[96px]" />
          <Skeleton className="h-[20px] w-[57px]" />
        </div>
        <Skeleton className="h-4" />
      </div>
    </div>
  </div>
);
