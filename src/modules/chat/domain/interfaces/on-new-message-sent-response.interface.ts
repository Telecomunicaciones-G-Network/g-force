import type { MessageType } from '../types';

/**
 * On new message sent response interface
 *
 * This interface represents the response from the on new message sent socket event.
 */
export interface OnNewMessageSentResponse {
  contactId: string;
  conversationId: string;
  messageId: string;
  messageTextPreview: string | null;
  messageType: MessageType;
}
