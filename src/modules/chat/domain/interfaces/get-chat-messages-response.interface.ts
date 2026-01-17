import type { ApiResponse } from '@module-core/interfaces';
import type { Message } from './message.interface';

export interface GetChatMessagesResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  messages: Message[];
}
