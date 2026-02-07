import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name AgentStatusSelectorOption
 *
 * @description This interface represents an option in the agent status selector.
 *
 * @property {number} id - The id of the option.
 * @property {string} label - The label of the option.
 * @property {AgentStatus} status - The status of the option.
 */
export interface AgentStatusSelectorOption {
  id: number;
  label: string;
  status: AgentStatus;
}
