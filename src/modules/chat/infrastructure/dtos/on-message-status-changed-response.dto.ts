import type { MessageStatus } from '../../domain/types';

/**
 * On message status changed response DTO
 *
 * @property message_id - The ID of the message
 * @property status - The status of the message
 */
export interface OnMessageStatusChangedResponseDTO {
  message_id: string;
  status: MessageStatus;
}
