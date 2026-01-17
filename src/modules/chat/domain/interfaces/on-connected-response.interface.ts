import type { Agent } from './agent.interface';

/**
 * On connected response interface
 *
 * This interface represents the response from the on connected socket event.
 */
export interface OnConnectedResponse {
  agent: Agent;
  success: boolean;
}
