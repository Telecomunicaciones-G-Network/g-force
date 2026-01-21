import { SocketResponse } from '@module-core/interfaces';

/**
 * Emit send internal message response interface
 *
 * This interface represents the response for emitting an internal message event.
 *
 * @property errorCode - The error code.
 * @property messageId - The id of the created internal message.
 */
export interface EmitSendInternalMessageResponse
  extends Omit<SocketResponse, 'details' | 'message' | 'error_code'> {
  errorCode?: string;
  messageId?: string;
}
