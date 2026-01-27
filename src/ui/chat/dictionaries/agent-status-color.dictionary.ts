import { AgentStatus } from '@module-chat/domain/types';

import { AgentStatus as AgentStatusValues } from '@module-chat/domain/enums/agent-status.enum';

/**
 * Agent Status Color Dictionary
 *
 * This dictionary returns the color for each agent status.
 */
export const AGENT_STATUS_COLOR_DICTIONARY: Record<AgentStatus, string> = {
  [AgentStatusValues.AWAY]: 'bg-warning-200',
  [AgentStatusValues.BUSY]: 'bg-alert-200',
  [AgentStatusValues.OFFLINE]: 'bg-neutral-300',
  [AgentStatusValues.ONLINE]: 'bg-success-300',
} as const;
