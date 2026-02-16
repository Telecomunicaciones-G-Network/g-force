import type { Media as MediaValues } from '../interfaces';
import type { MediaStorageStatus, MediaType } from '../types';

/**
 * @name Media
 *
 * @description This entity represents a media in the chat system.
 *
 * @property {string} id - The ID of the media.
 * @property {string | null} downloadUrl - The download URL of the media.
 * @property {string} filename - The filename of the media.
 * @property {string} mimeType - The MIME type of the media.
 * @property {MediaStorageStatus} storageStatus - The storage status of the media.
 * @property {MediaType} type - The type of the media.
 */
export class Media {
  /**
   * Constructor
   */
  constructor(
    public id: string,
    public downloadUrl: string | null,
    public filename: string,
    public mimeType: string,
    public storageStatus: MediaStorageStatus,
    public type: MediaType,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the media to values
   *
   * @returns {MediaValues} The media values
   */
  public toValues(): MediaValues {
    return {
      id: this.id,
      downloadUrl: this.downloadUrl,
      filename: this.filename,
      mimeType: this.mimeType,
      storageStatus: this.storageStatus,
      type: this.type,
    };
  }
}
