import type { SocketResponse } from '@module-core/interfaces';

export interface EmitSendTextMessageResponseDTO extends SocketResponse {
  message_id?: string;
}
