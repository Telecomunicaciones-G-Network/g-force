import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';
import { BadRequestException } from '@http-client/exceptions/bad-request.exception';

import { FinishChatConversationException } from '../../domain/exceptions/finish-chat-conversation.exception';

export const FinishChatConversationUsecase = async (
  httpChatRepository: ChatRepository,
  contactId?: string,
): Promise<boolean> => {
  if (!contactId) {
    throw new BadRequestException('Contact ID is required');
  }

  return await httpChatRepository
    .finishChatConversation(contactId)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new FinishChatConversationException({
        contactId: contactId,
        status: error?.status,
      });
    });
};
