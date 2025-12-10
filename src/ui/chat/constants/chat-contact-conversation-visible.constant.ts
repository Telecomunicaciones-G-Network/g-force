import { ConversationStatus } from '@module-chat/domain/enums/conversation-status.enum';

export const CHAT_CONTACT_CONVERSATION_VISIBLE: string[] = [
  ConversationStatus.ACTIVE,
  ConversationStatus.ASSIGNED,
];
