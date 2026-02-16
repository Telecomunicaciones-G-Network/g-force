import type { MediaStorageStatus } from '../types';

/**
 * @name OnMediaStatusChangedResponse
 *
 * @description This interface represents the values of an on media status changed response.
 *
 * @property {string} mediaId - The ID of the media.
 * @property {string} messageId - The ID of the message.
 * @property {MediaStorageStatus} storageStatus - The status of the media storage.
 */
export interface OnMediaStatusChangedResponse {
  mediaId: string;
  messageId: string;
  storageStatus: MediaStorageStatus;
}
