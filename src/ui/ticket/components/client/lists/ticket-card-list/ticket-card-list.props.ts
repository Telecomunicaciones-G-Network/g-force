import type { Ticket } from '@module-ticket/domain/interfaces';

/**
 * @name TicketCardListProps
 *
 * @description Props for the TicketCardList component.
 *
 * @property {boolean} [error] - Whether to show an error message.
 * @property {boolean} [loading] - Whether to show a loading state.
 * @property {Ticket[]} [tickets] - The tickets to display in the list.
 */
export interface TicketCardListProps {
  error?: boolean;
  hideLabel?: boolean;
  loading?: boolean;
  tickets?: Ticket[];
}
