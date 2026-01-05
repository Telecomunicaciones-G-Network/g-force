import type { TeamCodename } from '../../domain/types';

/**
 * On contact assignment updated response agent DTO
 *
 * This DTO represents the agent information from the on contact assignment updated socket event.
 */
export interface OnContactAssignmentUpdatedResponseAgentDTO {
  id: string;
  full_name: string;
}

/**
 * On contact assignment updated response team DTO
 *
 * This DTO represents the team information from the on contact assignment updated socket event.
 */
export interface OnContactAssignmentUpdatedResponseTeamDTO {
  codename: TeamCodename;
  name: string;
}

/**
 * On contact assignment updated response DTO
 *
 * This DTO represents the response from the on contact assignment updated socket event.
 */
export interface OnContactAssignmentUpdatedResponseDTO {
  agent: OnContactAssignmentUpdatedResponseAgentDTO;
  contact_id: string;
  conversation_id: string;
  team: OnContactAssignmentUpdatedResponseTeamDTO;
}
