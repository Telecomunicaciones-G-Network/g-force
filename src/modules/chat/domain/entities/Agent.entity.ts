import type { Agent as AgentValues } from '../interfaces';
import type { AgentStatus, TeamCodename } from '../types';

/**
 * @name Agent
 *
 * @description This entity represents an agent in the chat system.
 *
 * @property {string} id - The ID of the agent.
 * @property {string} email - The email of the agent.
 * @property {boolean} isBot - Whether the agent is a bot.
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
    public email: string,
    public isBot: boolean,
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
      email: this.email,
      isBot: this.isBot,
      name: this.name,
      status: this.status,
      teams: this.teams,
    };
  }
}
