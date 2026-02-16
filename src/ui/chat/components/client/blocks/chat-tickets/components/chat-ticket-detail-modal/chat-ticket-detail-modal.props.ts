import type { Ticket } from '@module-ticket/domain/interfaces';

export interface ChatTicketDetailModalProps {
  ticketId: number;
  initialTicketData?: Ticket;
}
