import type { UserValues } from '../interfaces';

export class User {
  constructor(private values: UserValues) {}

  public toValues(): UserValues {
    return this.values;
  }
}
