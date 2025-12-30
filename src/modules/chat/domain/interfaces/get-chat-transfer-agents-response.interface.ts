import type { ApiResponse } from '@module-core/interfaces';
import type { AgentValues } from './agent-values.interface';

export interface GetChatTransferAgentsResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  agents: AgentValues[];
}
