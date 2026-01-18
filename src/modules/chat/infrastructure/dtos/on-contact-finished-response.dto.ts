/**
 * On contact finished response DTO
 *
 * This DTO represents the response from the on contact finished socket event.
 *
 * @param contact_id - The ID of the contact
 * @param conversation_id - The ID of the conversation
 */
export interface OnContactFinishedResponseDTO {
  contact_id: string;
  conversation_id: string;
}
