import { SocketResponse } from '@module-core/interfaces';

export interface EmitSendDocumentMessageResponse
  extends Omit<SocketResponse, 'details' | 'message' | 'error_code'> {
  errorCode?: string;
  messageId?: string;
}
