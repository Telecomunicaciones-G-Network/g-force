import type { TeamCodename } from '../types';

/**
 * @name Team
 *
 * @description This interface represents the values of a team.
 *
 * @property {TeamCodename} id - The id of the team.
 * @property {string} name - The name of the team.
 */
export interface Team {
  id: TeamCodename;
  name: string;
}
