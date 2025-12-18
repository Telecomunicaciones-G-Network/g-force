import type { TeamValues } from '../interfaces';
import type { TeamCodename } from '../types';

export class Team {
  constructor(
    public id: TeamCodename,
    public name: string,
  ) {}

  public toValues(): TeamValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
