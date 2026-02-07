import type {
  GetContactContractsRequest,
  GetContactContractsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetContactContractsException } from '../../domain/exceptions/get-contact-contracts.exception';

/**
 * @name getContactContractsUsecase
 *
 * @description This usecase gets the contracts for a contact.
 *
 * @param {ChatRepository} chatRepository - The chat repository to interact with.
 * @param {GetContactContractsRequest} request - The request object.
 *
 * @returns {Promise<GetContactContractsResponse>} The response object.
 *
 * TODO: Filter depending of error obtained using error dictionary o control plane.
 */
export const getContactContractsUsecase = async (
  chatRepository: ChatRepository,
  request: GetContactContractsRequest,
): Promise<GetContactContractsResponse> => {
  return chatRepository
    .getContactContracts(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactContractsException({
        contactId: request?.contactId,
        status: error?.status,
      });
    });
};
