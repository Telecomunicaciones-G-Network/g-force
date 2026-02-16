import type { ApiGsoftResponse } from '@module-core/interfaces';
import type { Agent } from './agent.interface';
import type { TeamCodename } from '../types';

/**
 * @name GetAgentsResponseTeam
 *
 * @description This interface represents the team of an agent.
 *
 * @property {TeamCodename} id - The id of the team.
 * @property {string} name - The name of the team.
 */
export interface GetAgentsResponseTeam {
  id: TeamCodename;
  name: string;
}

export interface GetAgentsResponseAgent extends Omit<Agent, 'teams'> {
  teams: GetAgentsResponseTeam[];
}

/**
 * @name GetAgentsResponse
 *
 * @description This interface represents the response from the get agents API.
 *
 * @property {Agent[]} agents - The agents.
 * @property {number} status - The status code.
 * @property {boolean} success - Whether the request was successful.
 */
export interface GetAgentsResponse extends Omit<ApiGsoftResponse, 'results'> {
  agents: GetAgentsResponseAgent[];
}
