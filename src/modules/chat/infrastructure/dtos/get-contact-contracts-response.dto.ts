import type { ApiBaseResponse } from '@module-core/interfaces';
import type { GetContactContractsResult } from '../interfaces';

/**
 * @name GetContactContractsResponseDTO
 *
 * @description This interface represents the response from a contact's contract query.
 *
 * @property {number} [count] - The number of contracts
 * @property {string | null} [next] - The cursor for the next page
 * @property {string | null} [previous] - The cursor for the previous page
 * @property {GetContactContractsResult[]} [results] - The retrieved contracts
 * @property {number} [status] - The response status code
 * @property {boolean} [success] - Indicates if the query was successful
 */
export interface GetContactContractsResponseDTO
  extends Pick<
    ApiBaseResponse<GetContactContractsResult[]>,
    'results' | 'status' | 'success'
  > {
  count?: number;
  next: string | null;
  previous: string | null;
}
