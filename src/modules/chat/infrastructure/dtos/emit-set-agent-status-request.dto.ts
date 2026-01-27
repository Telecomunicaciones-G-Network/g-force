import type { AgentStatus } from '@module-chat/domain/types';

/**
 * Emit Set Agent Status Request DTO
 *
 * @property status - The status to set.
 */
export interface EmitSetAgentStatusRequestDTO {
  status: AgentStatus;
}
