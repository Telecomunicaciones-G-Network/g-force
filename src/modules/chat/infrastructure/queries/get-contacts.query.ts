import type {
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';

import { getContactsUsecase } from '../../application/usecases/get-contacts.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

/**
 * @name GetContactsQuery
 *
 * @description This query gets the contacts.
 *
 * @param {GetContactsRequest} query - The request object.
 *
 * @returns {Promise<GetContactsResponse>} The response object.
 */
export const GetContactsQuery = async (
  query?: GetContactsRequest,
): Promise<GetContactsResponse> =>
  await getContactsUsecase(httpChatRepository, query);
