import type { AgentStatus, TeamCodename } from '../../domain/types';

export interface GetChatTransferAgentsRequestDTO {
  is_bot?: boolean;
  page_size?: number;
  page?: number;
  search?: string;
  status?: AgentStatus;
  team_codename?: TeamCodename;
}
