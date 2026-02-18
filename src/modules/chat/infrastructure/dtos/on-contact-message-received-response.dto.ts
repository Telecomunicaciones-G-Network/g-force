import type { MessageType } from '../../domain/types';

/**
 * @name OnContactMessageReceivedResponseDTO
 *
 * @description This interface represents the response for on new message received event.
 *
 * @property {string} contact_id - The ID of the contact
 * @property {string} conversation_id - The ID of the conversation
 * @property {string} message_id - The ID of the message
 * @property {string | null} message_text_preview - The text preview of the message
 * @property {MessageType} message_type - The type of the message
 */
export interface OnContactMessageReceivedResponseDTO {
  contact_id: string;
  conversation_id: string;
  message_id: string;
  message_text_preview: string | null;
  message_type: MessageType;
}
