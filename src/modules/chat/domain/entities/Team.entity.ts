// DONE:

import type { TeamValues } from '../interfaces';

export class Team {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public toValues(): TeamValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
