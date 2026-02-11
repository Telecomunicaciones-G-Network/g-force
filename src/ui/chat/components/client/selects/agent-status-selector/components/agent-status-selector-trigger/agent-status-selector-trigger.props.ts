import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name AgentStatusSelectorTriggerProps
 *
 * @property {AgentStatus} [agentStatus] - The agent status.
 * @property {boolean} [disabled] - Whether the button is disabled.
 * @property {boolean} [isLoading] - Whether the button is loading.
 * @property {boolean} [isOpen] - Whether the button is open.
 * @property {function} [onClick] - The function to call when the button is clicked.
 */
export interface AgentStatusSelectorTriggerProps {
  agentStatus?: AgentStatus;
  disabled?: boolean;
  isLoading?: boolean;
  isOpen?: boolean;
  onClick?: VoidFunction;
}
