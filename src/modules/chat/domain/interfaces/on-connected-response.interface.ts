import type { Agent } from './agent.interface';

/**
 * On connected response interface
 *
 * This interface represents the response from the on connected socket event.
 *
 * @property agent - The agent information.
 * @property success - Whether the request was successful.
 */
export interface OnConnectedResponse {
  agent: Omit<Agent, 'status'>;
  success: boolean;
}
