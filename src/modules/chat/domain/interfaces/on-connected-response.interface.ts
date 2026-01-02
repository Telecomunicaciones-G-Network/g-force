import type { AgentValues } from './agent-values.interface';

/**
 * On connected response interface
 *
 * This interface represents the response from the on connected socket event.
 */
export interface OnConnectedResponse {
  agent: AgentValues;
  success: boolean;
}
