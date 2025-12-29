import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../chat-transfer-modal-body/chat-transfer-modal-body.module.css';

export const ChatTransferModalSkeleton = () => (
  <div className={styles.base}>
    <Skeleton className="h-[58px] w-full" />
    <Skeleton className="h-10 w-full" />
  </div>
);
