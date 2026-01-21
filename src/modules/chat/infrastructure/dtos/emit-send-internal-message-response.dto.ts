import type { SocketResponse } from '@module-core/interfaces';

/**
 * Emit send internal message response DTO
 *
 * This DTO represents the response for emitting an internal message event.
 *
 * @property message_id - The id of the created internal message.
 */
export interface EmitSendInternalMessageResponseDTO extends SocketResponse {
  message_id: string;
}
