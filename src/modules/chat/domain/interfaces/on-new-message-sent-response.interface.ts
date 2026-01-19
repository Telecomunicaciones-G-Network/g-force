import type { MessageType } from '../types';

/**
 * On new message sent response interface
 *
 * This interface represents the response from the on new message sent socket event.
 *
 * @property contactId - The ID of the contact
 * @property conversationId - The ID of the conversation
 * @property messageId - The ID of the message
 * @property messageTextPreview - The text preview of the message
 * @property messageType - The type of the message
 */
export interface OnNewMessageSentResponse {
  contactId: string;
  conversationId: string;
  messageId: string;
  messageTextPreview: string | null;
  messageType: MessageType;
}
