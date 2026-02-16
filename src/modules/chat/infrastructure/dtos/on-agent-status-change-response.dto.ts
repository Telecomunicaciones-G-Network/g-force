import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name OnAgentStatusChangedResponseDTO
 *
 * @description This interface represents the response for on agent status changed event.
 *
 * @property {AgentStatus} status - The status of the agent.
 */
export interface OnAgentStatusChangedResponseDTO {
  status: AgentStatus;
}
