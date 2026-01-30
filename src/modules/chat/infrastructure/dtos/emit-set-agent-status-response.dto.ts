import type { SocketResponse } from '@module-core/interfaces';
import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name EmitSetAgentStatusResponseDTO
 *
 * @description This interface represents the response for emitting an agent status event.
 *
 * @property {AgentStatus | null} status - The status of the agent.
 * @property {boolean} success - Whether the request was successful.
 */
export interface EmitSetAgentStatusResponseDTO
  extends Pick<SocketResponse, 'success'> {
  status?: AgentStatus | null;
  success: boolean;
}
