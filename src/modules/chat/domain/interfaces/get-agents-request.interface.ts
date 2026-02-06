import type { AgentStatus, TeamCodename } from '../types';

/**
 * @name GetAgentsRequest
 *
 * @description This interface represents the request for the get agents query.
 *
 * @property {boolean} isBot - Whether the agents are bots.
 * @property {string} limit - The number of agents per page.
 * @property {string} page - The page number.
 * @property {string} search - The search query.
 * @property {AgentStatus} status - The status of the agents.
 * @property {TeamCodename} teamCodename - The codename of the team.
 */
export type GetAgentsRequest = {
  isBot?: boolean;
  limit?: string;
  page?: string;
  search?: string;
  status?: AgentStatus;
  teamCodename?: TeamCodename;
};
