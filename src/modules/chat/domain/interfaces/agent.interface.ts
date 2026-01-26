import type { AgentStatus } from '../enums/agent-status.enum';
import type { TeamCodename } from '../types';

/**
 * Agent values interface
 *
 * This interface represents the values of an agent.
 *
 * @property id - The id of the agent.
 * @property name - The name of the agent.
 * @property status - The status of the agent.
 * @property teams - The teams of the agent.
 */
export interface Agent {
  id: string;
  name: string;
  status?: AgentStatus;
  teams: TeamCodename[];
}
