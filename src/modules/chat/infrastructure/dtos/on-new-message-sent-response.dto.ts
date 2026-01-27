import type { MessageType } from '../../domain/types';

/**
 * On new message sent response DTO
 *
 * @property contact_id - The ID of the contact
 * @property conversation_id - The ID of the conversation
 * @property message_id - The ID of the message
 * @property message_text_preview - The text preview of the message
 * @property message_type - The type of the message
 */
export interface OnNewMessageSentResponseDTO {
  contact_id: string;
  conversation_id: string;
  message_id: string;
  message_text_preview: string | null;
  message_type: MessageType;
}
