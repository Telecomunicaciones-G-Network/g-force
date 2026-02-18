import type { SocketResponse } from '@module-core/interfaces';

export interface EmitMarkMessagesAsReadResponseDTO extends SocketResponse {
  message_id: string;
}
