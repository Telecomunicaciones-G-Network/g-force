import type { MessageStatus } from '../../domain/types';

export interface OnMessageStatusChangedResponseDTO {
  message_id: string;
  status: MessageStatus;
}
