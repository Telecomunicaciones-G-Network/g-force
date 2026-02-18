import type { MediaStorageStatus } from '../../domain/types';

/**
 * @name OnChatMediaStatusChangedResponseDTO
 *
 * @description This interface represents the response for on media status changed event.
 *
 * @property {string} media_id - The ID of the media
 * @property {string} message_id - The ID of the message
 * @property {MediaStorageStatus} storage_status - The status of the media storage
 */
export interface OnChatMediaStatusChangedResponseDTO {
  media_id: string;
  message_id: string;
  storage_status: MediaStorageStatus;
}
