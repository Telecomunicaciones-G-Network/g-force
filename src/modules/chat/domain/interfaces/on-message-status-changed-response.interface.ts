import type { MessageStatus } from '../types';

/**
 * @name OnMessageStatusChangedResponse
 *
 * @description This interface represents the values of an on message status changed response.
 *
 * @property {string} messageId - The ID of the message.
 * @property {MessageStatus} status - The status of the message.
 */
export interface OnMessageStatusChangedResponse {
  messageId: string;
  status: MessageStatus;
}
