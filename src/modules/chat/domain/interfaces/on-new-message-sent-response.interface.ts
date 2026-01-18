import type { MessageType } from '../types';

/**
 * On new message sent response interface
 *
 * This interface represents the response from the on new message sent socket event.
 *
 * @param contactId - The ID of the contact
 * @param conversationId - The ID of the conversation
 * @param messageId - The ID of the message
 * @param messageTextPreview - The text preview of the message
 * @param messageType - The type of the message
 */
export interface OnNewMessageSentResponse {
  contactId: string;
  conversationId: string;
  messageId: string;
  messageTextPreview: string | null;
  messageType: MessageType;
}
