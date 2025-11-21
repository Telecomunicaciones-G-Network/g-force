import type { MediaValues } from '../interfaces';
import type { MediaType } from '../types';

export class Media {
  private id: string;
  private filename: string;
  private mimetype: string;
  private type: MediaType;

  constructor(id: string, filename: string, mimetype: string, type: MediaType) {
    this.id = id;
    this.filename = filename;
    this.mimetype = mimetype;
    this.type = type;
  }

  public toValues(): MediaValues {
    return {
      id: this.id,
      filename: this.filename,
      mimetype: this.mimetype,
      type: this.type,
    };
  }
}
