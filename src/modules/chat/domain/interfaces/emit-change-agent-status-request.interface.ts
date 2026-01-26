import type { AgentStatus } from '../enums/agent-status.enum';

export interface EmitChangeAgentStatusRequest {
  status: AgentStatus;
  onSuccess?: () => void;
}
