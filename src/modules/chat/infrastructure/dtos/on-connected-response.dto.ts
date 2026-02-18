import type { AgentStatus, TeamCodename } from '../../domain/types';

/**
 * @name OnConnectedResponseDTO
 *
 * @description This interface represents the response for on connected event.
 *
 * @property {string} agent_full_name - The full name of the agent.
 * @property {string} agent_id - The id of the agent.
 * @property {TeamCodename[]} agent_teams - The teams of the agent.
 * @property {string[]} contact_ids - The ids of the contacts.
 * @property {boolean} success - Whether the request was successful.
 * @property {string} user_id - The id of the user.
 */
export interface OnConnectedResponseDTO {
  agent_full_name: string;
  agent_id: string;
  agent_status: AgentStatus;
  agent_teams: TeamCodename[];
  contact_ids: string[];
  success: boolean;
  user_id: string;
}
