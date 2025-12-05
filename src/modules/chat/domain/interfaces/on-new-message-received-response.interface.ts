import type { MessageType } from '../types';

export interface OnNewMessageReceivedResponse {
  contactId: string;
  conversationId: string;
  messageId: string;
  messageTextPreview: string | null;
  messageType: MessageType;
}
