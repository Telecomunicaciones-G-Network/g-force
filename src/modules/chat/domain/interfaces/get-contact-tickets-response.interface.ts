import type { ApiBaseResponse } from '@module-core/interfaces';
import type { Ticket } from '@module-ticket/domain/interfaces/ticket.interface';

/**
 * @name GetContactTicketsResponse
 *
 * @description This interface represents the response of a contact ticket query.
 *
 * @property {number} [count] - The number of tickets
 * @property {string | null} [next] - The cursor for the next page
 * @property {string | null} [previous] - The cursor for the previous page
 * @property {Ticket[]} [tickets] - The retrieved tickets
 * @property {number} [status] - The status code of the response
 * @property {boolean} [success] - Indicates if the query was successful
 */
export interface GetContactTicketsResponse
  extends Pick<ApiBaseResponse, 'status' | 'success'> {
  count?: number;
  next?: string | null;
  previous?: string | null;
  tickets?: Ticket[];
}
