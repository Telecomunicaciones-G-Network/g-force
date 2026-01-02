import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../chat-transfer-conversation-modal-body/chat-transfer-conversation-modal-body.module.css';

export const ChatTransferConversationModalSkeleton = () => (
  <div className={styles.base}>
    <Skeleton className="h-[58px] w-full" />
    <Skeleton className="h-10 w-full" />
  </div>
);
