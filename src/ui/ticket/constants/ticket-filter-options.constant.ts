import type { TicketFilterOption } from '@ui-ticket/interfaces';

import { TicketStatusNames } from '@module-ticket/domain/enums/ticket-status-names.enum';

/**
 * @name TICKET_FILTER_OPTIONS
 *
 * @description This constant is used to filter tickets.
 *
 * @returns {TicketFilterOption[]} The ticket filter options.
 */
export const TICKET_FILTER_OPTIONS: TicketFilterOption[] = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Abierto', value: TicketStatusNames.OPENED },
  { label: 'Cerrado', value: TicketStatusNames.CLOSED },
] as const;
