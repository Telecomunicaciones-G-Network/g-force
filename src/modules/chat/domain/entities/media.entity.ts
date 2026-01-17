import type { Media as MediaValues } from '../interfaces';
import type { MediaStorageStatus, MediaType } from '../types';

/**
 * Media entity
 *
 * This entity represents a media in the chat system.
 */
export class Media {
  /**
   * Constructor
   *
   * @param id - The ID of the media
   * @param downloadUrl - The download URL of the media
   * @param filename - The filename of the media
   * @param mimeType - The MIME type of the media
   * @param storageStatus - The storage status of the media
   * @param type - The type of the media
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
   * Convert the media to values
   *
   * @returns The media values
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
