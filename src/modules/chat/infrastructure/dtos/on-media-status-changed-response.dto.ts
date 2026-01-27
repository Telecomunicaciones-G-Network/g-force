import type { MediaStorageStatus } from '../../domain/types';

/**
 * On media status changed response DTO
 *
 * @property media_id - The ID of the media
 * @property message_id - The ID of the message
 * @property storage_status - The status of the media storage
 */
export interface OnMediaStatusChangedResponseDTO {
  media_id: string;
  message_id: string;
  storage_status: MediaStorageStatus;
}
