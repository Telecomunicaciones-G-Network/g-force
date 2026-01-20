import type { MediaStorageStatus } from '../types';

/**
 * On media status changed response interface
 *
 * This interface represents the response from the on media status changed socket event.
 *
 * @property mediaId - The ID of the media
 * @property messageId - The ID of the message
 * @property storageStatus - The status of the media storage
 */
export interface OnMediaStatusChangedResponse {
  mediaId: string;
  messageId: string;
  storageStatus: MediaStorageStatus;
}
