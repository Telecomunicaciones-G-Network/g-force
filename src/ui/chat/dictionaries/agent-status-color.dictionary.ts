import { AgentStatus } from '@module-chat/domain/types';

import { AgentStatus as AgentStatusValues } from '@module-chat/domain/enums/agent-status.enum';

/**
 * @name agentStatusColorDictionary
 *
 * @description This dictionary returns the color for each agent status.
 *
 * @returns {Record<AgentStatus, string>} The agent status color dictionary
 */
export const agentStatusColorDictionary = {
  [AgentStatusValues.AWAY]: 'bg-warning-200',
  [AgentStatusValues.BUSY]: 'bg-alert-200',
  [AgentStatusValues.OFFLINE]: 'bg-neutral-300',
  [AgentStatusValues.ONLINE]: 'bg-success-300',
} as const satisfies Record<AgentStatus, string>;
