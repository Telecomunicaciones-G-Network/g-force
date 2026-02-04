import type { MessageEventData } from '@module-chat/domain/interfaces';

/**
 * @name ChatConversationEventConversationFinishedMessageProps
 *
 * @param {string} createdAt - The creation date of the message.
 * @param {MessageEventData | null} eventData - The event data of the message.
 *
 * TODO: Use a common interface
 */
export interface ChatConversationEventConversationFinishedMessageProps {
  createdAt?: string;
  eventData: MessageEventData | null;
}
