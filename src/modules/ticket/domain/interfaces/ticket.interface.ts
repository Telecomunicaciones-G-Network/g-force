import type { TicketStatusCode, TicketStatusName } from '../types';

/**
 * @name Ticket
 *
 * @description This interface represents a ticket values.
 *
 * @property {number} id - The ticket id
 * @property {number} contractId - The contract id
 * @property {string} createdAt - The creation date
 * @property {string} dateCreatedAt - The creation date in ISO 8601 format
 * @property {string} description - The description
 * @property {TicketStatusCode} statusCode - The status code
 * @property {TicketStatusName} statusName - The status name
 */
export interface Ticket {
  id: number;
  contractId: number;
  createdAt: string;
  dateCreatedAt: string;
  description?: string | null;
  statusCode: TicketStatusCode;
  statusName: TicketStatusName;
}
