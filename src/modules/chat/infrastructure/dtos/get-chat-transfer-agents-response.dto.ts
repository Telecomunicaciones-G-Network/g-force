import type { ApiBaseResponse } from '@module-core/interfaces';
import type { AgentStatus, TeamCodename } from '../../domain/types';

export interface GetChatTransferAgentsResult {
  email: string;
  full_name: string;
  id: string;
  is_bot: boolean;
  status: AgentStatus;
  teams: TeamCodename[];
}

export type GetChatTransferAgentsResponseDTO = ApiBaseResponse<
  GetChatTransferAgentsResult[]
>;
