import { SocketResponse } from '@module-core/interfaces';

/**
 * @name EmitSendInternalMessageResponse
 *
 * @description This interface represents the response for emitting an internal message event.
 *
 * @property {string} [errorCode] - The error code.
 * @property {string} [messageId] - The id of the created internal message.
 */
export interface EmitSendInternalMessageResponse
  extends Omit<SocketResponse, 'details' | 'message' | 'error_code'> {
  errorCode?: string;
  messageId?: string;
}
