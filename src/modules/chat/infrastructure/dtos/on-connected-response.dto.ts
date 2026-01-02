import type { TeamCodename } from '../../domain/types';

/**
 * On connected response DTO
 *
 * This DTO represents the response from the on connected socket event.
 */
export interface OnConnectedResponseDTO {
  agent_full_name: string;
  agent_id: string;
  agent_teams: TeamCodename[];
  contact_ids: string[];
  success: boolean;
  user_id: string;
}
