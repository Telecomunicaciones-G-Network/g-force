import type { TeamCodename } from '../types';

/**
 * Team values interface
 *
 * This interface represents the values of a team.
 *
 * @param id - The id of the team.
 * @param name - The name of the team.
 */
export interface Team {
  id: TeamCodename;
  name: string;
}
