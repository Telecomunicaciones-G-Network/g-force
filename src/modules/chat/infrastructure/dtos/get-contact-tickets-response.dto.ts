import type { ApiBaseResponse } from '@module-core/interfaces';
import type { GetContactTicketsResult } from '../interfaces';

/**
 * @name GetContactTicketsResponseDTO
 *
 * @description This interface represents the response from a contact's ticket query.
 *
 * @property {number} [count] - The number of tickets
 * @property {string | null} [next] - The cursor for the next page
 * @property {string | null} [previous] - The cursor for the previous page
 * @property {GetContactTicketsResult[]} [results] - The retrieved tickets
 * @property {number} [status] - The response status code
 * @property {boolean} [success] - Indicates if the query was successful
 */
export interface GetContactTicketsResponseDTO
  extends Pick<
    ApiBaseResponse<GetContactTicketsResult[]>,
    'results' | 'status' | 'success'
  > {
  count?: number;
  next?: string | null;
  previous?: string | null;
}
