/**
 * @name OnContactFinishedResponseDTO
 *
 * @description This interface represents the response for on contact finished event.
 *
 * @property {string} contact_id - The ID of the contact
 * @property {string} conversation_id - The ID of the conversation
 */
export interface OnContactFinishedResponseDTO {
  contact_id: string;
  conversation_id: string;
}
