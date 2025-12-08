import { FinishChatConversationUsecase } from '../../application/usecases/finish-chat-conversation.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const finishChatConversationCommand = async (
  contactId?: string,
): Promise<boolean> => {
  return await FinishChatConversationUsecase(httpChatRepository, contactId);
};
