import type { AgentValues } from '../interfaces';
import type { TeamCodename } from '../types';

/**
 * Agent entity
 *
 * This entity represents an agent in the chat system.
 */
export class Agent {
  /**
   * Constructor
   *
   * @param id - The ID of the agent
   * @param name - The name of the agent
   * @param teams - The teams of the agent
   */
  constructor(
    public id: string,
    public name: string,
    public teams: TeamCodename[],
  ) {}

  /**
   * Convert the agent to values
   *
   * @returns The agent values
   */
  public toValues(): AgentValues {
    return {
      id: this.id,
      name: this.name,
      teams: this.teams,
    };
  }
}
