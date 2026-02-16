import type { SocketResponse } from '@module-core/interfaces';

export interface EmitMarkMessageAsReadResponseDTO extends SocketResponse {
  message_id: string;
}
