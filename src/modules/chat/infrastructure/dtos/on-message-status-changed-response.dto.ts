import type { MessageStatus } from '../../domain/types';

/**
 * @name OnMessageStatusChangedResponseDTO
 *
 * @description This interface represents the response for on message status changed event.
 *
 * @property {string} message_id - The ID of the message
 * @property {MessageStatus} status - The status of the message
 */
export interface OnMessageStatusChangedResponseDTO {
  message_id: string;
  status: MessageStatus;
}
