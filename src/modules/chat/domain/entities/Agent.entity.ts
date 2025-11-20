// DONE:

import type { AgentValues } from '../interfaces';

export class Agent {
  private id: string;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public toValues(): AgentValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
