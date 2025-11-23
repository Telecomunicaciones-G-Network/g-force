import type { SocketResponse } from '@module-core/interfaces';

export interface EmitMarkMessageAsReadResponseInterface
  extends Omit<SocketResponse, 'details' | 'message' | 'error_code'> {
  errorCode?: string;
  messageId?: string;
}
