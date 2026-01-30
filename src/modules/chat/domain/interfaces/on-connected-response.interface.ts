import type { Agent } from './agent.interface';

/**
 * @name OnConnectedResponse
 *
 * @description This interface represents the response from the on connected socket event.
 *
 * @property {Omit<Agent, 'status'>} agent - The agent information.
 * @property {boolean} success - Whether the request was successful.
 */
export interface OnConnectedResponse {
  agent: Omit<Agent, 'status'>;
  success: boolean;
}
