import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import styles from './ticket-card-list-empty.module.css';

/**
 * @name TicketCardListEmpty
 *
 * @description Component to display a empty state for the ticket card list.
 */
export const TicketCardListEmpty = () => (
  <div className={styles.base}>
    <Icon name="message_info" size={64} />
    <Text
      as="h5"
      className="text-center text-neutral-900"
      level="medium"
      scheme="label"
    >
      No hay tickets que mostrar por el momento
    </Text>
  </div>
);
