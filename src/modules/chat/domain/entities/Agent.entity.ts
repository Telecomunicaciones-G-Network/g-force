import type { AgentValues } from '../interfaces';

export class Agent {
  constructor(private values: AgentValues) {}

  public toValues(): AgentValues {
    return this.values;
  }
}
