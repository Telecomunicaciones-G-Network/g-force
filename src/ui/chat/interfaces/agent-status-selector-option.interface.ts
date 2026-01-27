import type { AgentStatus } from '@module-chat/domain/types';

/**
 * Agent Status Selector Option interface
 *
 * This interface represents an option in the agent status selector.
 *
 * @property id - The id of the option.
 * @property label - The label of the option.
 * @property status - The status of the option.
 */
export interface AgentStatusSelectorOption {
  id: number;
  label: string;
  status: AgentStatus;
}
