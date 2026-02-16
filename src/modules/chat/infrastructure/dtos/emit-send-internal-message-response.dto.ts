import type { SocketResponse } from '@module-core/interfaces';

/**
 * @name EmitSendInternalMessageResponseDTO
 *
 * @description This interface represents the response for emitting an internal message.
 *
 * @property {any} details - The details of the response.
 * @property {string | null} error_code - The error code.
 * @property {string} message - The message of the response.
 * @property {string} message_id - The id of the created internal message.
 * @property {boolean} success - Whether the message was sent successfully.
 */
export interface EmitSendInternalMessageResponseDTO extends SocketResponse {
  message_id: string;
}
