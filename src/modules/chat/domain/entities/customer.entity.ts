// CHECKED:

import type { CustomerValues } from '../interfaces';

export class Customer {
  constructor(private values: CustomerValues) {}

  public toValues(): CustomerValues {
    return this.values;
  }
}
