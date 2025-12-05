import type { TeamValues } from '../interfaces';

export class Team {
  constructor(
    public id: string,
    public name: string,
  ) {}

  public toValues(): TeamValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
