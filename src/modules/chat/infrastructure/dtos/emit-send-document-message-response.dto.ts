import { SocketResponse } from '@module-core/interfaces';

export interface EmitSendDocumentMessageResponseDTO extends SocketResponse {
  message_id?: string;
}
