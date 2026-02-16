import type { TicketStatusName } from '@module-ticket/domain/types';

import { TicketStatusNames } from '@module-ticket/domain/enums/ticket-status-names.enum';

/**
 * @name ticketCardBorderColorDictionary
 *
 * @description This dictionary maps ticket status names to their respective border color classes for ticket cards.
 *
 * @returns {Record<TicketStatusName, string>} The dictionary mapping ticket status names to border color class names.
 */
export const ticketCardBorderColorDictionary = {
  [TicketStatusNames.CLOSED]: 'border-l-4 border-solid border-l-success-300',
  [TicketStatusNames.IN_PROGRESS]:
    'border-l-4 border-solid border-l-warning-200',
  [TicketStatusNames.OPENED]:
    'border-l-4 border-solid border-l-tag-blue-foreground',
} as const satisfies Record<TicketStatusName, string>;
