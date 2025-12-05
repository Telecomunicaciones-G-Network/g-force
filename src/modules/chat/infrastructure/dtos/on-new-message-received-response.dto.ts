import type { MessageType } from '../../domain/types';

export interface OnNewMessageReceivedResponseDTO {
  contact_id: string;
  conversation_id: string;
  message_id: string;
  message_text_preview: string | null;
  message_type: MessageType;
}
