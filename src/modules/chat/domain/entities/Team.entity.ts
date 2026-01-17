import type { Team as TeamValues } from '../interfaces';
import type { TeamCodename } from '../types';

/**
 * Team entity
 *
 * This entity represents a team in the chat system.
 */
export class Team {
  /**
   * Constructor
   *
   * @param id - The id of the team.
   * @param name - The name of the team.
   */
  constructor(
    public id: TeamCodename,
    public name: string,
  ) {}

  /**
   * Convert the team to a plain object.
   *
   * @returns The plain object.
   */
  public toValues(): TeamValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
