/**
 * Emit send internal message request DTO
 *
 * This DTO represents the request for emitting an internal message event.
 *
 * @property contact_id - The contact id.
 * @property text - The text of the message.
 */
export interface EmitSendInternalMessageRequestDTO {
  contact_id: string;
  text: string;
}
