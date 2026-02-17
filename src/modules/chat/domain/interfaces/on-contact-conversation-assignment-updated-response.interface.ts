import type { TeamCodename } from '../types';

/**
 * @name OnContactConversationAssignmentUpdatedAgentResponse
 *
 * @description This interface represents the values of an agent assigned/updated in a conversation.
 *
 * @property {string} id - The id of the agent.
 * @property {string} name - The name of the agent.
 */
export interface OnContactConversationAssignmentUpdatedAgentResponse {
  id: string;
  name: string;
}

/**
 * @name OnContactConversationAssignmentUpdatedTeamResponse
 *
 * @description This interface represents the values of a team in the context of a conversation assignment update.
 *
 * @property {TeamCodename} id - The team ID.
 * @property {string} name - The team name.
 */
export interface OnContactConversationAssignmentUpdatedTeamResponse {
  id: TeamCodename;
  name: string;
}

/**
 * @name OnContactConversationAssignmentUpdatedResponse
 *
 * @description This interface represents the values of an on conversation assignment updated response.
 *
 * @property {OnConversationAssignmentUpdatedAgentResponse} agent - The agent information.
 * @property {string} contactId - The contact ID.
 * @property {string} conversationId - The conversation ID.
 * @property {OnConversationAssignmentUpdatedTeamResponse} team - The team information.
 */
export interface OnContactConversationAssignmentUpdatedResponse {
  agent: OnContactConversationAssignmentUpdatedAgentResponse;
  contactId: string;
  conversationId: string;
  team: OnContactConversationAssignmentUpdatedTeamResponse;
}
