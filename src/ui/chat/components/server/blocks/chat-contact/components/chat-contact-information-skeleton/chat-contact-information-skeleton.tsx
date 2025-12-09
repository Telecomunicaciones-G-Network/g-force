import { Separator } from '@gnetwork-ui/components/atoms/separators/separator';
import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../../chat-contact.module.css';

export const ChatContactInformationSkeleton = () => (
  <>
    <div className={styles.base__info}>
      <Skeleton className="h-5 w-[min(263px,100%)]" />
      <Skeleton className="h-5 w-[min(80px,100%)]" />
    </div>
    <Separator />
    <div className={styles.base__info}>
      <Skeleton className="h-5 w-[min(263px,100%)]" />
      <Skeleton className="h-5 w-[min(80px,100%)]" />
    </div>
    <Separator />
    <div className={styles.base__info}>
      <Skeleton className="h-5 w-[min(263px,100%)]" />
      <Skeleton className="h-5 w-[min(80px,100%)]" />
    </div>
    <Separator />
    <div className={styles.base__info}>
      <Skeleton className="h-5 w-[min(263px,100%)]" />
      <Skeleton className="h-5 w-[min(80px,100%)]" />
    </div>
  </>
);
