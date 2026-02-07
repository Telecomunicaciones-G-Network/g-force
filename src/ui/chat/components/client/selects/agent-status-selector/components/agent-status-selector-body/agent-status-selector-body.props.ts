import type { AgentStatus } from '@module-chat/domain/types';

/**
 * @name AgentStatusSelectorBodyProps
 *
 * @property {AgentStatus} [agentStatus] - The agent status.
 * @property {function} [onChange] - The function to call when the status is changed.
 */
export interface AgentStatusSelectorBodyProps {
  agentStatus?: AgentStatus;
  onChange?: (status: AgentStatus) => void;
}
