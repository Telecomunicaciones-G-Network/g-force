import type { TeamCodename } from '../../domain/types';

/**
 * On contact assignment updated response agent DTO
 *
 * @property id - The agent ID
 * @property full_name - The agent full name
 */
export interface OnContactAssignmentUpdatedResponseAgentDTO {
  id: string;
  full_name: string;
}

/**
 * On contact assignment updated response team DTO
 *
 * @property codename - The team codename
 * @property name - The team name
 */
export interface OnContactAssignmentUpdatedResponseTeamDTO {
  codename: TeamCodename;
  name: string;
}

/**
 * On contact assignment updated response DTO
 *
 * @property agent - The agent information
 * @property contact_id - The contact ID
 * @property conversation_id - The conversation ID
 * @property team - The team information
 */
export interface OnContactAssignmentUpdatedResponseDTO {
  agent: OnContactAssignmentUpdatedResponseAgentDTO;
  contact_id: string;
  conversation_id: string;
  team: OnContactAssignmentUpdatedResponseTeamDTO;
}
