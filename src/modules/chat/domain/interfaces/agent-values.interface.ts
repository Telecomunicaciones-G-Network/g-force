import type { TeamCodename } from '../types';

/**
 * Agent values interface
 *
 * This interface represents the values of an agent.
 */
export interface AgentValues {
  id: string;
  name: string;
  teams: TeamCodename[];
}
