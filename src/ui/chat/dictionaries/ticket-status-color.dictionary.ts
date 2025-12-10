import { TicketStatus } from '@module-ticket/domain/enums/ticket-status.enum';

export const ticketStatusColorDictionary: Record<TicketStatus, string> = {
  [TicketStatus.CLOSED]: 'text-success-300',
  [TicketStatus.IN_PROGRESS]: 'text-tag-blue-foreground',
  [TicketStatus.OPEN]: 'text-warning-200',
};
