import type { AgentStatus } from '@module-chat/domain/types';

/**
 * Agent Status Selector Body props.
 *
 * @property agentStatus - The agent status.
 */
export interface AgentStatusSelectorBodyProps {
  agentStatus?: AgentStatus;
  onChange?: (status: AgentStatus) => void;
}
