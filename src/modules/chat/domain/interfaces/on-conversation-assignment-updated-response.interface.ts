import type { TeamCodename } from '../types';

/**
 * On conversation assignment updated agent response interface
 *
 * This interface represents the agent information from the on conversation assignment updated socket event.
 *
 * @param id - The agent ID
 * @param name - The agent name
 */
export interface OnConversationAssignmentUpdatedAgentResponse {
  id: string;
  name: string;
}

/**
 * On conversation assignment updated team response interface
 *
 * This interface represents the team information from the on conversation assignment updated socket event.
 *
 * @param id - The team ID
 * @param name - The team name
 */
export interface OnConversationAssignmentUpdatedTeamResponse {
  id: TeamCodename;
  name: string;
}

/**
 * On conversation assignment updated response interface
 *
 * This interface represents the response from the on conversation assignment updated socket event.
 *
 * @param agent - The agent information
 * @param contactId - The contact ID
 * @param conversationId - The conversation ID
 * @param team - The team information
 */
export interface OnConversationAssignmentUpdatedResponse {
  agent: OnConversationAssignmentUpdatedAgentResponse;
  contactId: string;
  conversationId: string;
  team: OnConversationAssignmentUpdatedTeamResponse;
}
