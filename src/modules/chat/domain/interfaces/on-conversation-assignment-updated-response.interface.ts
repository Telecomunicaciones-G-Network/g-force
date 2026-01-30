import type { TeamCodename } from '../types';

/**
 * @name OnConversationAssignmentUpdatedAgentResponse
 *
 * @description This interface represents the values of an agent assigned/updated in a conversation.
 *
 * @property {string} id - The id of the agent.
 * @property {string} name - The name of the agent.
 */
export interface OnConversationAssignmentUpdatedAgentResponse {
  id: string;
  name: string;
}

/**
 * @name OnConversationAssignmentUpdatedTeamResponse
 *
 * @description This interface represents the values of a team in the context of a conversation assignment update.
 *
 * @property {TeamCodename} id - The team ID.
 * @property {string} name - The team name.
 */
export interface OnConversationAssignmentUpdatedTeamResponse {
  id: TeamCodename;
  name: string;
}

/**
 * @name OnConversationAssignmentUpdatedResponse
 *
 * @description This interface represents the values of an on conversation assignment updated response.
 *
 * @property {OnConversationAssignmentUpdatedAgentResponse} agent - The agent information.
 * @property {string} contactId - The contact ID.
 * @property {string} conversationId - The conversation ID.
 * @property {OnConversationAssignmentUpdatedTeamResponse} team - The team information.
 */
export interface OnConversationAssignmentUpdatedResponse {
  agent: OnConversationAssignmentUpdatedAgentResponse;
  contactId: string;
  conversationId: string;
  team: OnConversationAssignmentUpdatedTeamResponse;
}
