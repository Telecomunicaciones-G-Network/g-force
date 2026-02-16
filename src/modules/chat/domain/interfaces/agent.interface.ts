import type { AgentStatus, TeamCodename } from '../types';

/**
 * @name Agent
 *
 * @description This interface represents the values of an agent.
 *
 * @property {string} id - The id of the agent.
 * @property {string} email - The email of the agent.
 * @property {boolean} isBot - Whether the agent is a bot.
 * @property {string} name - The name of the agent.
 * @property {AgentStatus} status - The status of the agent.
 * @property {TeamCodename[]} teams - The teams of the agent.
 */
export interface Agent {
  id: string;
  email: string;
  isBot: boolean;
  name: string;
  status: AgentStatus;
  teams: TeamCodename[];
}
