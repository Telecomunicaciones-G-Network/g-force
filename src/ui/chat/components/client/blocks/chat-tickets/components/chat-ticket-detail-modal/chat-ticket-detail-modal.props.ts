import type { TicketValues } from '@module-ticket/domain/interfaces';

export interface ChatTicketDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  ticketId: number;
  initialTicketData?: TicketValues;
}
