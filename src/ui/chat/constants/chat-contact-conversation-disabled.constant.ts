import type { ConversationStatus } from '@module-chat/domain/types/conversation-status.type';

import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

/**
 * @naChat contact conversation disabled constant
 *
 * @description This constant is used to disable the chat conversation if the conversation status is waiting
 *
 * @returns {ConversationStatus[]} The conversation statuses that disable the chat conversation
 */
export const CHAT_CONTACT_CONVERSATION_DISABLED: ConversationStatus[] = [
  ConversationStatusValues.WAITING,
] as const;
