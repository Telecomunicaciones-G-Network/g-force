import type { MediaValues } from '../interfaces';
import type { MediaStorageStatus, MediaType } from '../types';

export class Media {
  constructor(
    public id: string,
    public downloadUrl: string | null,
    public filename: string,
    public mimeType: string,
    public storageStatus: MediaStorageStatus,
    public type: MediaType,
  ) {}

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
