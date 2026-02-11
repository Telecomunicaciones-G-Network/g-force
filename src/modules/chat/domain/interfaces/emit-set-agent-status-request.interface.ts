import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name EmitSetAgentStatusRequest
 *
 * @description This interface represents the request for emitting an agent status event.
 *
 * @property {AgentStatus} status - The status to set for the agent.
 * @property {VoidFunction} [onSuccess] - Optional callback when status change succeeds.
 * @property {VoidFunction} [onFinally] - Optional callback when status change process completes.
 */
export interface EmitSetAgentStatusRequest {
  onFinally?: VoidFunction;
  onSuccess?: VoidFunction;
  status: AgentStatus;
}
