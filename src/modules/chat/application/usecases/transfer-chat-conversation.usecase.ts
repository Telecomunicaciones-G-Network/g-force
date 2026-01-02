import type {
  TransferChatConversationRequest,
  TransferChatConversationResponse,
} from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

import { BaseException } from '@http-client/exceptions/base.exception';

import { TransferChatConversationException } from '@module-chat/domain/exceptions/transfer-chat-conversation.exception';

export const transferChatConversationUsecase = async (
  chatRepository: ChatRepository,
  request: TransferChatConversationRequest,
): Promise<TransferChatConversationResponse> => {
  return await chatRepository
    .transferChatConversation(request)
    .then((response) => response)
    .catch((err) => {
      const error = err as BaseException;

      throw new TransferChatConversationException({
        status: error?.status,
      });
    });
};
