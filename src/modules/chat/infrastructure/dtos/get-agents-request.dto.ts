import type { AgentStatus, TeamCodename } from '../../domain/types';

/**
 * @name GetAgentsRequestDTO
 *
 * @description This interface represents the request for getting agents.
 *
 * @property {string} is_bot - Whether the agents are bots.
 * @property {string} page - The page number.
 * @property {string} page_size - The number of agents per page.
 * @property {string} search - The search query.
 * @property {AgentStatus} status - The status of the agents.
 * @property {TeamCodename} team_codename - The codename of the team.
 */
export interface GetAgentsRequestDTO {
  is_bot?: string;
  page_size?: string;
  page?: string;
  search?: string;
  status?: AgentStatus;
  team_codename?: TeamCodename;
}
