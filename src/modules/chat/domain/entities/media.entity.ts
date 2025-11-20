// DONE:

import type { MediaValues } from '../interfaces';

export class Media {
  private mimetype: string;
  private type: string;
  private url: string;

  constructor(mimetype: string, type: string, url: string) {
    this.mimetype = mimetype;
    this.type = type;
    this.url = url;
  }

  public toValues(): MediaValues {
    return {
      mimetype: this.mimetype,
      type: this.type,
      url: this.url,
    };
  }
}
