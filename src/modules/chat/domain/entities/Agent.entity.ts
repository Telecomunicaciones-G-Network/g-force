import type { Agent as AgentValues } from '../interfaces';
import type { AgentStatus, TeamCodename } from '../types';

/**
 * @name Agent
 *
 * @description This entity represents an agent in the chat system.
 *
 * @property {string} id - The ID of the agent.
 * @property {string} name - The name of the agent.
 * @property {AgentStatus} status - The status of the agent.
 * @property {TeamCodename[]} teams - The teams of the agent.
 */
export class Agent {
  /**
   * Constructor
   */
  constructor(
    public id: string,
    public name: string,
    public status: AgentStatus,
    public teams: TeamCodename[],
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the agent to values
   *
   * @returns {AgentValues} The agent values
   */
  public toValues(): AgentValues {
    return {
      id: this.id,
      name: this.name,
      status: this.status,
      teams: this.teams,
    };
  }
}
