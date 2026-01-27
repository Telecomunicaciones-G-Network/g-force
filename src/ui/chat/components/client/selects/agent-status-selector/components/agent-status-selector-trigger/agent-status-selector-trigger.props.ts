import type { AgentStatus } from '@module-chat/domain/types';

/**
 * Agent Status Selector Trigger props.
 *
 * @property agentStatus - The agent status.
 * @property disabled - Whether the button is disabled.
 * @property isLoading - Whether the button is loading.
 * @property isOpen - Whether the button is open.
 * @property onClick - The function to call when the button is clicked.
 */
export interface AgentStatusSelectorTriggerProps {
  agentStatus?: AgentStatus;
  disabled?: boolean;
  isLoading?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
}
