import { TicketStatusName } from '@module-ticket/domain/types';

import { TicketStatusNames } from '@module-ticket/domain/enums/ticket-status-names.enum';

/**
 * @name ticketStatusColorDictionary
 *
 * @description This dictionary maps ticket status names to their respective color classes for ticket cards.
 *
 * @returns {Record<TicketStatusName, string>} The dictionary mapping ticket status names to color class names.
 */
export const ticketStatusColorDictionary = {
  [TicketStatusNames.CLOSED]: 'text-success-300',
  [TicketStatusNames.IN_PROGRESS]: 'text-warning-200',
  [TicketStatusNames.OPENED]: 'text-tag-blue-foreground',
} as const satisfies Record<TicketStatusName, string>;
