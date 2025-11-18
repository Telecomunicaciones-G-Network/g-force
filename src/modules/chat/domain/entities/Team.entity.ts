import type { TeamValues } from '../interfaces';

export class Team {
  constructor(private values: TeamValues) {}

  public toValues(): TeamValues {
    return this.values;
  }
}
