import type { TeamCodename } from '../types';

export interface OnConversationAssignmentUpdatedResponse {
  agentId: string;
  agentName: string;
  contactId: string;
  teamId: TeamCodename;
  teamName: string;
}
