import type { ApiResponse } from '@module-core/interfaces';
import type { Agent } from './agent.interface';

export interface GetChatTransferAgentsResponse
  extends Omit<ApiResponse, 'extra' | 'results'> {
  agents: Agent[];
}
