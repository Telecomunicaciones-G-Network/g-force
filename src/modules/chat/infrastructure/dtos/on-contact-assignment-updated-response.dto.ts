import type { TeamCodename } from '../../domain/types';

/**
 * @name OnContactAssignmentUpdatedResponseAgentDTO
 *
 * @description This interface represents the agent information from the on contact assignment updated response.
 *
 * @property {string} id - The agent ID
 * @property {string} full_name - The agent full name
 */
export interface OnContactAssignmentUpdatedResponseAgentDTO {
  id: string;
  full_name: string;
}

/**
 * @name OnContactAssignmentUpdatedResponseTeamDTO
 *
 * @description This interface represents the team information from the on contact assignment updated response.
 *
 * @property {TeamCodename} codename - The team codename
 * @property {string} name - The team name
 */
export interface OnContactAssignmentUpdatedResponseTeamDTO {
  codename: TeamCodename;
  name: string;
}

/**
 * @name OnContactAssignmentUpdatedResponseDTO
 *
 * @description This interface represents the response for on contact assignment updated event.
 *
 * @property {OnContactAssignmentUpdatedResponseAgentDTO} agent - The agent information
 * @property {string} contact_id - The contact ID
 * @property {string} conversation_id - The conversation ID
 * @property {OnContactAssignmentUpdatedResponseTeamDTO} team - The team information
 */
export interface OnContactAssignmentUpdatedResponseDTO {
  agent: OnContactAssignmentUpdatedResponseAgentDTO;
  contact_id: string;
  conversation_id: string;
  team: OnContactAssignmentUpdatedResponseTeamDTO;
}
