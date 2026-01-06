import type { MessageType } from '../../domain/types';

/**
 * On new message sent response DTO
 *
 * This DTO represents the response from the on new message sent socket event.
 * [Contact event]
 */
export interface OnNewMessageSentResponseDTO {
  contact_id: string;
  conversation_id: string;
  message_id: string;
  message_text_preview: string | null;
  message_type: MessageType;
}
