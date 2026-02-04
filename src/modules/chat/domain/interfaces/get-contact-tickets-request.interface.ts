import type { TicketStatusCode } from '@module-ticket/domain/types';

/**
 * @name GetContactTicketsRequest
 *
 * @description This interface represents the request for contact tickets.
 *
 * @property {string} [contactId] - The contact ID
 * @property {number} [contractId] - The contract ID
 * @property {number} [limit] - The ticket limit to return
 * @property {number} [page] - The page of tickets to return
 * @property {TicketStatusCode} [status] - The status of the tickets
 */
export interface GetContactTicketsRequest {
  contactId?: string;
  contractId?: number;
  limit?: number;
  page?: number;
  status?: TicketStatusCode;
}
