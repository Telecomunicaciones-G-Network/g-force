import { SelfAssignChatConversationUsecase } from '../../application/usecases/self-assign-chat-conversation.usecase';

import { httpChatRepository } from '../repositories/http-chat.repository';

export const selfAssignChatConversationCommand = async (
  contactId?: string,
): Promise<boolean> => {
  return await SelfAssignChatConversationUsecase(httpChatRepository, contactId);
};
