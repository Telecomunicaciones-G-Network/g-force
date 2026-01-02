import type { TeamCodename } from '../types';

export interface OnConversationAssignmentUpdatedAgentResponse {
  id: string;
  name: string;
}

export interface OnConversationAssignmentUpdatedTeamResponse {
  id: TeamCodename;
  name: string;
}

export interface OnConversationAssignmentUpdatedResponse {
  agent: OnConversationAssignmentUpdatedAgentResponse;
  contactId: string;
  conversationId: string;
  team: OnConversationAssignmentUpdatedTeamResponse;
}
