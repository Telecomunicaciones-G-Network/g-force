import type { TransferChatConversationRequest } from '../../domain/interfaces';
import type { ChatRepository } from '../../domain/repositories';

export const transferChatConversationUsecase = async (
  chatRepository: ChatRepository,
  request: TransferChatConversationRequest,
) => {
  return await chatRepository.transferChatConversation(request);
};
