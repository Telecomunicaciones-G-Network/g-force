import type { SocketResponse } from '@module-core/interfaces';
import type { AgentStatus } from '@module-chat/domain/types';

/**
 * Emit Set Agent Status Response DTO
 *
 * @property status - The status of the agent.
 * @property success - Whether the request was successful.
 */
export interface EmitSetAgentStatusResponseDTO
  extends Pick<SocketResponse, 'success'> {
  status?: AgentStatus | null;
  success: boolean;
}
