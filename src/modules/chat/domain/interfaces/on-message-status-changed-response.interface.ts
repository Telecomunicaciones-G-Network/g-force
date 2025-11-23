import type { MessageStatus } from '../types';

export interface OnMessageStatusChangedResponse {
  messageId: string;
  status: MessageStatus;
}
