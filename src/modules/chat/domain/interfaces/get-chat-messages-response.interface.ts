// DONE:

import type { ApiResponse } from '@module-core/interfaces';
import type { MessageValues } from './message-values.interface';

export interface GetChatMessagesResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  messages: MessageValues[];
}
