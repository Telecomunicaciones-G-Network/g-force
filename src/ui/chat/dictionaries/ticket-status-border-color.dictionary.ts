import type { TicketStatusName } from '@module-ticket/domain/types';

import { TicketStatusNames } from '@module-ticket/domain/enums/ticket-status-names.enum';

export const ticketStatusBorderColorDictionary: Record<
  TicketStatusName,
  string
> = {
  [TicketStatusNames.CLOSED]: 'border-l-4 border-solid border-l-success-300',
  [TicketStatusNames.IN_PROGRESS]:
    'border-l-4 border-solid border-l-warning-200',
  [TicketStatusNames.OPENED]:
    'border-l-4 border-solid border-l-tag-blue-foreground',
};
