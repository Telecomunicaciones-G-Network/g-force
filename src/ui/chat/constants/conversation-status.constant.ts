import type { ConversationStatus } from '@module-chat/domain/types';

import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

/**
 * @name CONVERSATION_STATUS
 *
 * @description This constant is used to define the conversation status.
 *
 * @constant {ConversationStatus[]} The conversation status.
 */
export const CONVERSATION_STATUS = Object.values(
  ConversationStatusValues,
) as ConversationStatus[];
