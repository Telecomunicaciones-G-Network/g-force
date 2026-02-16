import type { TicketStatusCode } from '@module-ticket/domain/types';

/**
 * @name GetContactTicketsRequestDTO
 *
 * @description This interface represents the request for getting contact tickets.
 *
 * @property {string} [contract] - The contract ID
 * @property {string} [page_size] - The page size
 * @property {string} [page] - The page number
 * @property {TicketStatusCode} [status] - The status code
 */
export interface GetContactTicketsRequestDTO {
  contract?: string;
  page_size?: string;
  page?: string;
  status?: TicketStatusCode;
}
