import type { MessageStatus } from '../../domain/types';

/**
 * On message status changed response DTO
 *
 * This DTO represents the response from the on message status changed socket event.
 *
 * @property message_id - The ID of the message
 * @property status - The status of the message
 */
export interface OnMessageStatusChangedResponseDTO {
  message_id: string;
  status: MessageStatus;
}
