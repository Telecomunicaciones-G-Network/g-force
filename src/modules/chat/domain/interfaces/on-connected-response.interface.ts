import type { AgentValues } from './agent-values.interface';

export interface OnConnectedResponse {
  agent: AgentValues;
  success: boolean;
}
