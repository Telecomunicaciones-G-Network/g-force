import type { ChatRepository } from '../../domain/repositories';

import { BadRequestException } from '@http-client/exceptions/bad-request.exception';

import { SelfAssignChatConversationException } from '../../domain/exceptions/self-assign-chat-conversation.exception';

export const SelfAssignChatConversationUsecase = async (
  httpChatRepository: ChatRepository,
  contactId?: string,
): Promise<boolean> => {
  if (!contactId) {
    throw new BadRequestException('Contact ID is required');
  }

  return await httpChatRepository
    .selfAssignChatConversation(contactId)
    .then((response) => response)
    .catch((err) => {
      // biome-ignore lint/suspicious/noExplicitAny: false positive
      const error = err as any;      
      const errorMessage = error?.response?.data?.detail || error?.response?.data?.message || error?.message || 'Error occurred';
      
      console.error('SelfAssign error info:', errorMessage);

      throw new SelfAssignChatConversationException({
        contactId,
        status: error?.status,
        message: errorMessage,
      });
    });
};
