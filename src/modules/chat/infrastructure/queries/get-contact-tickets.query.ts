import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';

import { httpChatRepository } from '../repositories/http-chat.repository';

import { getContactTicketsUsecase } from '../../application/usecases/get-contact-tickets.usecase';

/**
 * @name GetContactTicketsQuery
 *
 * @description This query gets the tickets for a contact.
 *
 * @param {GetContactTicketsRequest} query - The request object
 *
 * @returns {Promise<GetContactTicketsResponse>} The response object
 *
 * @throws {GetContactTicketsException} If an error occurs while retrieving the tickets.
 */
export const GetContactTicketsQuery = async (
  query: GetContactTicketsRequest,
): Promise<GetContactTicketsResponse> => {
  return await getContactTicketsUsecase(httpChatRepository, query);
};
