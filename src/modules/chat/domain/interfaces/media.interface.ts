import type { MediaStorageStatus, MediaType } from '../types';

/**
 * Media interface
 *
 * @property  id - The ID of the media
 * @property downloadUrl - The download URL of the media
 * @property filename - The filename of the media
 * @property mimeType - The MIME type of the media
 * @property storageStatus - The storage status of the media
 * @property type - The type of the media
 */
export interface Media {
  id: string;
  downloadUrl: string | null;
  filename: string;
  mimeType: string;
  storageStatus: MediaStorageStatus;
  type: MediaType;
}
