import type { AgentStatus } from '@module-chat/domain/types';

/**
 * On agent status change response DTO
 *
 * @property status - The status of the agent
 */
export interface OnAgentStatusChangedResponseDTO {
  status: AgentStatus;
}
