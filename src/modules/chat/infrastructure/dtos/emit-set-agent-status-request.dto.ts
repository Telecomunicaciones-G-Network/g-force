import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name EmitSetAgentStatusRequestDTO
 *
 * @description This interface represents the request for emitting an agent status event.
 *
 * @property {AgentStatus} status - The status to set.
 */
export interface EmitSetAgentStatusRequestDTO {
  status: AgentStatus;
}
