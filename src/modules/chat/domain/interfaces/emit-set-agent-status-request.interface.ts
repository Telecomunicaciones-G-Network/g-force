import type { AgentStatus } from '@module-chat/domain/types';

/**
 * Emit Set Agent Status Request interface
 *
 * @property status - The status to set.
 * @property onSuccess - The function to call on success.
 */
export interface EmitSetAgentStatusRequest {
  onFinally?: () => void;
  onSuccess?: () => void;
  status: AgentStatus;
}
