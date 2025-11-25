import type { ConversationStatus } from '../types';

export interface OnNewMessageReceivedResponse {
  contactId: string;
  conversationId: string;
  conversationStatus: ConversationStatus;
}
