import type { SocketResponse } from '@module-core/interfaces';

/**
 * Emit send internal message response DTO
 *
 * @property message_id - The id of the created internal message.
 */
export interface EmitSendInternalMessageResponseDTO extends SocketResponse {
  message_id: string;
}
