import type { TeamCodename } from '../../domain/types';

/**
 * On connected response DTO
 *
 * @property agent_full_name - The full name of the agent.
 * @property agent_id - The id of the agent.
 * @property agent_teams - The teams of the agent.
 * @property contact_ids - The ids of the contacts.
 * @property success - Whether the request was successful.
 * @property user_id - The id of the user.
 */
export interface OnConnectedResponseDTO {
  agent_full_name: string;
  agent_id: string;
  agent_teams: TeamCodename[];
  contact_ids: string[];
  success: boolean;
  user_id: string;
}
