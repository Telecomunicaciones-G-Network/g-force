import type { Team as TeamValues } from '../interfaces';
import type { TeamCodename } from '../types';

/**
 * @name Team
 *
 * @description This entity represents a team in the chat system.
 *
 * @property {TeamCodename} id - The ID of the team.
 * @property {string} name - The name of the team.
 */
export class Team {
  /**
   * Constructor
   */
  constructor(
    public id: TeamCodename,
    public name: string,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the team to values
   *
   * @returns {TeamValues} The team values
   */
  public toValues(): TeamValues {
    return {
      id: this.id,
      name: this.name,
    };
  }
}
