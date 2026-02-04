import type {
  GetContactContractsRequest,
  GetContactContractsResponse,
} from '../../domain/interfaces';

import { getContactContractsUsecase } from '../../application/usecases/get-contact-contracts.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

/**
 * @name GetContactContractsQuery
 *
 * @description Executes a query to retrieve the contracts associated with a contact by delegating to the appropriate use case.
 *
 * @param {GetContactContractsRequest} query - The request payload containing the contact's identification and filter parameters.
 *
 * @returns {Promise<GetContactContractsResponse>} A promise that resolves to the list of contracts for the specified contact.
 */
export const GetContactContractsQuery = async (
  query: GetContactContractsRequest,
): Promise<GetContactContractsResponse> => {
  return await getContactContractsUsecase(httpChatRepository, query);
};
