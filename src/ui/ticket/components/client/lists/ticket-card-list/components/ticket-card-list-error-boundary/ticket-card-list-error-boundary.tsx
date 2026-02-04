import { MdMoodBad } from 'react-icons/md';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './ticket-card-list-error-boundary.module.css';

/**
 * @name TicketCardListErrorBoundary
 *
 * @description Component to display an error boundary for the ticket card list.
 *
 * TODO: Handler error boundary reset button
 */
export const TicketCardListErrorBoundary = () => (
  <div className={styles.base}>
    <MdMoodBad className="min-h-16 min-w-16 size-16" />
    <Text
      as="h5"
      className="text-center text-neutral-900"
      level="medium"
      scheme="label"
    >
      Ha ocurrido un error al cargar los tickets
    </Text>
  </div>
);
