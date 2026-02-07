import type { AgentStatus, TeamCodename } from '../types';

export interface GetChatTransferAgentsRequest {
  isBot?: boolean;
  limit?: number;
  page?: number;
  search?: string;
  status?: AgentStatus;
  teamCodename?: TeamCodename;
}
