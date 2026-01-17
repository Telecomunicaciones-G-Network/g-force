import type { MediaStorageStatus, MediaType } from '../types';

/**
 * Media interface
 *
 * @property {string} id - The ID of the media
 * @property {string | null} downloadUrl - The download URL of the media
 * @property {string} filename - The filename of the media
 * @property {string} mimeType - The MIME type of the media
 * @property {MediaStorageStatus} storageStatus - The storage status of the media
 * @property {MediaType} type - The type of the media
 */
export interface Media {
  id: string;
  downloadUrl: string | null;
  filename: string;
  mimeType: string;
  storageStatus: MediaStorageStatus;
  type: MediaType;
}
