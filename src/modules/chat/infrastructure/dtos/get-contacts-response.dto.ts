import type { ApiBaseResponse } from '@module-core/interfaces';
import type { GetContactsResult } from '../interfaces';

/**
 * @type GetContactsResponseDTO
 *
 * @description This type represents the response of the get contacts endpoint.
 *
 * @property {ApiBaseResponse<GetContactsResult[]>} data - The data of the response.
 */
export type GetContactsResponseDTO = ApiBaseResponse<GetContactsResult[]>;
