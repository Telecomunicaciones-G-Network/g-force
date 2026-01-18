import type { MessageType } from '../../domain/types';

/**
 * On new message received response DTO
 *
 * This DTO represents the response from the on new message received socket event.
 *
 * @param contact_id - The ID of the contact
 * @param conversation_id - The ID of the conversation
 * @param message_id - The ID of the message
 * @param message_text_preview - The text preview of the message
 * @param message_type - The type of the message
 */
export interface OnNewMessageReceivedResponseDTO {
  contact_id: string;
  conversation_id: string;
  message_id: string;
  message_text_preview: string | null;
  message_type: MessageType;
}
