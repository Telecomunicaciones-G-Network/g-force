import { SocketResponse } from '@module-core/interfaces';

export interface EmitSendTextMessageResponse
  extends Omit<SocketResponse, 'details' | 'message' | 'error_code'> {
  errorCode?: string;
  messageId?: string;
}
