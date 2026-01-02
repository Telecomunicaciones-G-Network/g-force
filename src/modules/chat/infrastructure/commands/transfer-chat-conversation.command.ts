import type {
  TransferChatConversationRequest,
  TransferChatConversationResponse,
} from '../../domain/interfaces';

import { transferChatConversationUsecase } from '../../application/usecases/transfer-chat-conversation.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const transferChatConversationCommand = async (
  command: TransferChatConversationRequest,
): Promise<TransferChatConversationResponse> => {
  return await transferChatConversationUsecase(httpChatRepository, command);
};
