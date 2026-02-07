import type { AgentStatus } from '@module-chat/domain/types';

import { AgentStatus as AgentStatusValues } from '@module-chat/domain/enums/agent-status.enum';

/**
 * @name agentStatusLabelDictionary
 *
 * @description This dictionary returns the label for each agent status.
 *
 * @returns {Record<AgentStatus, string>} The agent status label dictionary
 */
export const agentStatusLabelDictionary = {
  [AgentStatusValues.AWAY]: 'Ausente',
  [AgentStatusValues.BUSY]: 'Ocupado',
  [AgentStatusValues.OFFLINE]: 'Desconectado',
  [AgentStatusValues.ONLINE]: 'Disponible',
} as const satisfies Record<AgentStatus, string>;
