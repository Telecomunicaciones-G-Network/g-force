import type { MessageStatus } from '../types';

/**
 * On message status changed response interface
 *
 * This interface represents the response from the on message status changed socket event.
 *
 * @property messageId - The ID of the message
 * @property status - The status of the message
 */
export interface OnMessageStatusChangedResponse {
  messageId: string;
  status: MessageStatus;
}
