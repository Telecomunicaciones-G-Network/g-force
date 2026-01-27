import type { AgentStatus } from '@module-chat/domain/types';

import { AgentStatus as AgentStatusValues } from '@module-chat/domain/enums/agent-status.enum';

/**
 * Agent Status Label Dictionary
 *
 * This dictionary returns the label for each agent status.
 */
export const AGENT_STATUS_LABEL_DICTIONARY: Record<AgentStatus, string> = {
  [AgentStatusValues.AWAY]: 'Ausente',
  [AgentStatusValues.BUSY]: 'Ocupado',
  [AgentStatusValues.OFFLINE]: 'Desconectado',
  [AgentStatusValues.ONLINE]: 'Disponible',
} as const;
