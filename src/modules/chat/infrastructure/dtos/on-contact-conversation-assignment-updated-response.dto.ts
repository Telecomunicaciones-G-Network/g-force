import type { TeamCodename } from '../../domain/types';

/**
 * @name OnContactConversationAssignmentUpdatedResponseAgentDTO
 *
 * @description This interface represents the agent information from the on contact assignment updated response.
 *
 * @property {string} id - The agent ID
 * @property {string} full_name - The agent full name
 */
export interface OnContactConversationAssignmentUpdatedResponseAgentDTO {
  id: string;
  full_name: string;
}

/**
 * @name OnContactConversationAssignmentUpdatedResponseTeamDTO
 *
 * @description This interface represents the team information from the on contact assignment updated response.
 *
 * @property {TeamCodename} codename - The team codename
 * @property {string} name - The team name
 */
export interface OnContactConversationAssignmentUpdatedResponseTeamDTO {
  codename: TeamCodename;
  name: string;
}

/**
 * @name OnContactConversationAssignmentUpdatedResponseDTO
 *
 * @description This interface represents the response for on contact assignment updated event.
 *
 * @property {OnContactConversationAssignmentUpdatedResponseAgentDTO} agent - The agent information
 * @property {string} contact_id - The contact ID
 * @property {string} conversation_id - The conversation ID
 * @property {OnContactConversationAssignmentUpdatedResponseTeamDTO} team - The team information
 */
export interface OnContactConversationAssignmentUpdatedResponseDTO {
  agent: OnContactConversationAssignmentUpdatedResponseAgentDTO;
  contact_id: string;
  conversation_id: string;
  team: OnContactConversationAssignmentUpdatedResponseTeamDTO;
}
