import { SocketResponse } from '@module-core/interfaces';

export interface EmitSendImageMessageResponse
  extends Omit<SocketResponse, 'details' | 'message' | 'error_code'> {
  errorCode?: string;
  messageId?: string;
}
