import type { TicketFilterOptionValue } from '@ui-ticket/types';

/**
 * @name TicketFilterOption
 *
 * @description This interface represents a filter option for a ticket.
 *
 * @property {string} label - The label of the option.
 * @property {string} value - The value of the option.
 */
export interface TicketFilterOption {
  label: string;
  value: TicketFilterOptionValue;
}
