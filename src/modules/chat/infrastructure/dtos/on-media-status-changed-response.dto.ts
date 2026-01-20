import type { MediaStorageStatus } from '../../domain/types';

/**
 * On media status changed response DTO
 *
 * This DTO represents the response from the on media status changed socket event.
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
