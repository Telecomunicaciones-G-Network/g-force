import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import styles from '../create-ticket-modal-content/create-ticket-modal-content.module.css';

/**
 * @name CreateTicketModalContentContractsSkeleton
 *
 * @description Component to display a skeleton for the create ticket form contracts.
 */
export const CreateTicketModalContentContractsSkeleton = () => (
  <div className={styles.base__contracts}>
    <Skeleton className="h-5 w-[160px]" />
    <Skeleton className="h-[142px] w-full" />
  </div>
);
