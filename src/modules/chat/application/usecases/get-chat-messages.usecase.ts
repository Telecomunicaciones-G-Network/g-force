// DONE:

import type {
  GetChatMessagesRequest,
  GetChatMessagesResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories/chat.repository';

import { BaseException } from '@http-client/exceptions/base.exception';

import { GetChatMessagesException } from '../../domain/exceptions/get-chat-messages.exception';

export const getChatMessagesUsecase = async (
  httpChatRepository: ChatRepository,
  request: GetChatMessagesRequest,
): Promise<GetChatMessagesResponse> => {
  return httpChatRepository
    .getChatMessages(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new GetChatMessagesException({
        status: error?.status,
      });
    });
};
