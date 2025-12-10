import { TicketStatus } from '@module-ticket/domain/enums/ticket-status.enum';

export const ticketStatusBorderColorDictionary: Record<TicketStatus, string> = {
  [TicketStatus.CLOSED]: 'border-l-4 border-solid border-l-success-300',
  [TicketStatus.IN_PROGRESS]:
    'border-l-4 border-solid border-l-tag-blue-foreground',
  [TicketStatus.OPEN]: 'border-l-4 border-solid border-l-warning-200',
};
