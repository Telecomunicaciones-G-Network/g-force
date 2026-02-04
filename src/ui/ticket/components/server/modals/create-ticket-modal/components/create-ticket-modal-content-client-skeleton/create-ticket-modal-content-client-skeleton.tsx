import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../create-ticket-modal-content/create-ticket-modal-content.module.css';

/**
 * @name CreateTicketModalContentClientSkeleton
 *
 * @description Component to display a skeleton for the create ticket form client.
 */
export const CreateTicketModalContentClientSkeleton = () => (
  <div className={styles.base__client_info}>
    <Skeleton className="h-5 w-[218px]" />
    <Skeleton className="h-5 w-[80px]" />
  </div>
);
