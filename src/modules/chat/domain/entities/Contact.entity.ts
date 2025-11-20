// DONE:

import type { ContactValues } from '../interfaces';

export class Contact {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public toValues(): ContactValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
