import type { MessageType } from '../types';

/**
 * On new message received response interface
 *
 * This interface represents the response from the on new message received socket event.
 */
export interface OnNewMessageReceivedResponse {
  contactId: string;
  conversationId: string;
  messageId: string;
  messageTextPreview: string | null;
  messageType: MessageType;
}
