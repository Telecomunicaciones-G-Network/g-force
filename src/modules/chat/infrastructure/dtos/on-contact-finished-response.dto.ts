/**
 * On contact finished response DTO
 *
 * This DTO represents the response from the on contact finished socket event.
 *
 * @property contact_id - The ID of the contact
 * @property conversation_id - The ID of the conversation
 */
export interface OnContactFinishedResponseDTO {
  contact_id: string;
  conversation_id: string;
}
