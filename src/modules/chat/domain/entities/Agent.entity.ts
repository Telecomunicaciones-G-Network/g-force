import type { AgentValues } from '../interfaces';

export class Agent {
  constructor(
    public id: string,
    public name: string,
  ) {}

  public toValues(): AgentValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
