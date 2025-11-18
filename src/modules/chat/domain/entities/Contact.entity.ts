// CHECKED:

import type { ContactValues } from '../interfaces';

export class Contact {
  constructor(private values: ContactValues) {}

  public toValues(): ContactValues {
    return this.values;
  }
}
