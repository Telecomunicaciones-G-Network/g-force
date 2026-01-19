import type { ConversationStatus } from '@module-chat/domain/types/conversation-status.type';

import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

/**
 * Chat contact conversation disabled constant
 *
 * This constant is used to disable the chat conversation if the conversation status is waiting
 */
export const CHAT_CONTACT_CONVERSATION_DISABLED: ConversationStatus[] = [
  ConversationStatusValues.WAITING,
];
