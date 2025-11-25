import type { ConversationStatus } from '../../domain/types';

export interface OnNewMessageReceivedResponseDTO {
  contact_id: string;
  conversation_id: string;
  conversation_status: ConversationStatus;
}
