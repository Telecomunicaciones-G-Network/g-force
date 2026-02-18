import type { MessageType } from '../types';

/**
 * @name OnContactMessageReceivedResponse
 *
 * @description This interface represents the values of an on new message received response.
 *
 * @property {string} contactId - The ID of the contact.
 * @property {string} conversationId - The ID of the conversation.
 * @property {string} messageId - The ID of the message.
 * @property {string | null} messageTextPreview - The text preview of the message.
 * @property {MessageType} messageType - The type of the message.
 */
export interface OnContactMessageReceivedResponse {
  contactId: string;
  conversationId: string;
  messageId: string;
  messageTextPreview: string | null;
  messageType: MessageType;
}
