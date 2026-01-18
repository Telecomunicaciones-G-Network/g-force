import type { TeamCodename } from '../../domain/types';

/**
 * On connected response DTO
 *
 * This DTO represents the response from the on connected socket event.
 *
 * @param agent_full_name - The full name of the agent.
 * @param agent_id - The id of the agent.
 * @param agent_teams - The teams of the agent.
 * @param contact_ids - The ids of the contacts.
 * @param success - Whether the request was successful.
 * @param user_id - The id of the user.
 */
export interface OnConnectedResponseDTO {
  agent_full_name: string;
  agent_id: string;
  agent_teams: TeamCodename[];
  contact_ids: string[];
  success: boolean;
  user_id: string;
}
