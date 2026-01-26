import type { AgentStatus } from '@module-chat/domain/types';

export interface EmitChangeAgentStatusRequestDTO {
  status: AgentStatus;
}
