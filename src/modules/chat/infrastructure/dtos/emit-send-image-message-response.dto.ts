import { SocketResponse } from '@module-core/interfaces';

export interface EmitSendImageMessageResponseDTO extends SocketResponse {
  message_id?: string;
}
