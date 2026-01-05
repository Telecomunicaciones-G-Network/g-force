import type { MessageType } from '../../domain/types';

/**
 * On new message received response DTO
 *
 * This DTO represents the response from the on new message received socket event.
 * [Contact event]
 */
export interface OnNewMessageReceivedResponseDTO {
  contact_id: string;
  conversation_id: string;
  message_id: string;
  message_text_preview: string | null;
  message_type: MessageType;
}
