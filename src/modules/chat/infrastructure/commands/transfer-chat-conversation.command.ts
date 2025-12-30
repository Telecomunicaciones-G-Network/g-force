import type { TransferChatConversationRequest } from '../../domain/interfaces';

import { transferChatConversationUsecase } from '../../application/usecases/transfer-chat-conversation.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const transferChatConversationCommand = async (
  command: TransferChatConversationRequest,
): Promise<void> => {
  return await transferChatConversationUsecase(httpChatRepository, command);
};
