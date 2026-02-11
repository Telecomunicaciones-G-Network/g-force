/**
 * @name EmitSendInternalMessageRequest
 *
 * @description This interface represents the request for emitting an internal message event.
 *
 * @property {string} contactId - The contact id.
 * @property {string} internalMessage - The internal message to send.
 * @property {VoidFunction} [onSuccess] - Optional callback when message sending succeeds.
 */
export interface EmitSendInternalMessageRequest {
  contactId: string;
  internalMessage: string;
  onSuccess?: VoidFunction;
}
