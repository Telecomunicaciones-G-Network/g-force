import type { Agent } from './agent.interface';

/**
 * On connected response interface
 *
 * This interface represents the response from the on connected socket event.
 *
 * @param agent - The agent information.
 * @param success - Whether the request was successful.
 */
export interface OnConnectedResponse {
  agent: Agent;
  success: boolean;
}
