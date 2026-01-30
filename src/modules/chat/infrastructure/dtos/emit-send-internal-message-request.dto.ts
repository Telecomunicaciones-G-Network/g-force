/**
 * @name EmitSendInternalMessageRequestDTO
 *
 * @description This interface represents the request for emitting an internal message.
 *
 * @property {string} contact_id - The contact id.
 * @property {string} text - The text of the message.
 */
export interface EmitSendInternalMessageRequestDTO {
  contact_id: string;
  text: string;
}
