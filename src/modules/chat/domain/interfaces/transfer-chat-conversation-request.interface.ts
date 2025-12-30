import type { TeamCodename } from '../types';

export interface TransferChatConversationRequest {
  agentId?: string;
  contactId: string;
  teamCodename: TeamCodename;
}
