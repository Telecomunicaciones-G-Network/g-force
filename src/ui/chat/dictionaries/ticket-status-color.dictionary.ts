import { TicketStatusName } from '@module-ticket/domain/types';

import { TicketStatusNames } from '@module-ticket/domain/enums/ticket-status-names.enum';

export const ticketStatusColorDictionary: Record<TicketStatusName, string> = {
  [TicketStatusNames.CLOSED]: 'text-success-300',
  [TicketStatusNames.IN_PROGRESS]: 'text-warning-200',
  [TicketStatusNames.OPENED]: 'text-tag-blue-foreground',
};
