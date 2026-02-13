import type {
  GetContactsRequest,
  GetContactsResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetContactsException } from '../../domain/exceptions/get-contacts.exception';

/**
 * @name getContactsUsecase
 *
 * @description This usecase gets the contacts.
 *
 * @param {ChatRepository} httpChatRepository - The chat repository to interact with.
 * @param {GetContactsRequest} request - The request object.
 *
 * @returns {Promise<GetContactsResponse>} The response object.
 *
 * TODO: Filter depending of error obtained using error dictionary o control plane.
 */
export const getContactsUsecase = async (
  httpChatRepository: ChatRepository,
  request?: GetContactsRequest,
): Promise<GetContactsResponse> => {
  return httpChatRepository
    .getContacts(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetContactsException({
        status: error?.status,
      });
    });
};
