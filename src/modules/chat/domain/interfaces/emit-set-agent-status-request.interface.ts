import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name EmitSetAgentStatusRequest
 *
 * @description This interface represents the request for emitting an agent status event.
 *
 * @property {AgentStatus} status - The status to set for the agent.
 * @property {() => void} [onSuccess] - Optional callback when status change succeeds.
 * @property {() => void} [onFinally] - Optional callback when status change process completes.
 */
export interface EmitSetAgentStatusRequest {
  onFinally?: () => void;
  onSuccess?: () => void;
  status: AgentStatus;
}
