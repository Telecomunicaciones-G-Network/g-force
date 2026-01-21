/**
 * Emit send internal message request interface
 *
 * This interface represents the request for emitting an internal message event.
 *
 * @property contactId - The contact id.
 * @property internalMessage - The internal message to send.
 * @property onSuccess - Optional callback when message sending succeeds.
 */
export interface EmitSendInternalMessageRequest {
  contactId: string;
  internalMessage: string;
  onSuccess?: () => void;
}
