import type { MediaValues } from '../interfaces';
import type { MediaType } from '../types';

export class Media {
  private id: string;
  private filename: string;
  private mimeType: string;
  private type: MediaType;

  constructor(id: string, filename: string, mimeType: string, type: MediaType) {
    this.id = id;
    this.filename = filename;
    this.mimeType = mimeType;
    this.type = type;
  }

  public toValues(): MediaValues {
    return {
      id: this.id,
      filename: this.filename,
      mimeType: this.mimeType,
      type: this.type,
    };
  }
}
