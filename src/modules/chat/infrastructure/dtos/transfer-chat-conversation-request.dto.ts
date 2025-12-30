import type { TeamCodename } from '../../domain/types';

export interface TransferChatConversationRequestDTO {
  agent_id?: string;
  contact_id: string;
  team_codename: TeamCodename;
}
