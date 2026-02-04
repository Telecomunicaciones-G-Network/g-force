import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetContactTicketsException } from '../../domain/exceptions/get-contact-tickets.exception';

/**
 * @name getContactTicketsUsecase
 *
 * @description Retrieves tickets associated with a contact using the provided ChatRepository.
 *
 * @param {ChatRepository} chatRepository - The chat repository to interact with.
 * @param {GetContactTicketsRequest} request - The request object containing parameters for ticket retrieval.
 *
 * @returns {Promise<GetContactTicketsResponse>} A promise that resolves to the tickets response.
 *
 * @throws {GetContactTicketsException} If an error occurs while retrieving the tickets.
 */
export const getContactTicketsUsecase = async (
  chatRepository: ChatRepository,
  request: GetContactTicketsRequest,
): Promise<GetContactTicketsResponse> => {
  return chatRepository
    .getContactTickets(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactTicketsException({
        contactId: request?.contactId,
        status: error?.status,
      });
    });
};
