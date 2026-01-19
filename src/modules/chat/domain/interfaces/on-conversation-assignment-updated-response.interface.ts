import type { TeamCodename } from '../types';

/**
 * On conversation assignment updated agent response interface
 *
 * This interface represents the agent information from the on conversation assignment updated socket event.
 *
 * @property id - The agent ID
 * @property name - The agent name
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
 * @property id - The team ID
 * @property name - The team name
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
 * @property agent - The agent information
 * @property contactId - The contact ID
 * @property conversationId - The conversation ID
 * @property team - The team information
 */
export interface OnConversationAssignmentUpdatedResponse {
  agent: OnConversationAssignmentUpdatedAgentResponse;
  contactId: string;
  conversationId: string;
  team: OnConversationAssignmentUpdatedTeamResponse;
}
