import type {
  GetContactsMappedResponse,
  GetContactsRequest,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories/chat.repository';

import { BaseException } from '@http-client/exceptions/base.exception';
import { GetContactsException } from '../../domain/exceptions/get-contacts.exception';

export const getContactsUsecase = async (
  httpChatRepository: ChatRepository,
  request?: GetContactsRequest,
): Promise<GetContactsMappedResponse> => {
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
