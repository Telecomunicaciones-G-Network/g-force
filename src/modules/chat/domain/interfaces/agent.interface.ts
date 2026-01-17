import type { TeamCodename } from '../types';

/**
 * Agent values interface
 *
 * This interface represents the values of an agent.
 *
 * @param id - The id of the agent.
 * @param name - The name of the agent.
 * @param teams - The teams of the agent.
 */
export interface Agent {
  id: string;
  name: string;
  teams: TeamCodename[];
}
