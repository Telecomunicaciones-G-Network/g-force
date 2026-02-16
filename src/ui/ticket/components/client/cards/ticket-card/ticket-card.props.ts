import type { Ticket } from '@module-ticket/domain/interfaces';

/**
 * @name TicketCardProps
 *
 * @property {boolean} [isTicketModalOpen] - Whether the ticket modal is open.
 * @property {function} [onOpenTicketModal] - Function to open the ticket modal.
 * @property {Ticket} ticket - The ticket to display in the card.
 */
export interface TicketCardProps {
  isTicketModalOpen?: boolean;
  onOpenTicketModal?: (open: boolean) => void;
  ticket: Ticket;
}
