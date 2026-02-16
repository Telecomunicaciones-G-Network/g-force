import type { AgentStatusSelectorOption } from '@ui-chat/interfaces';

import { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

/**
 * @name AgentStatusSelectorOptions
 *
 * @description This iterator returns the options for the agent status selector.
 *
 * @returns {AgentStatusSelectorOption[]} The agent status selector options.
 */
export const AgentStatusSelectorOptions: AgentStatusSelectorOption[] = [
  {
    id: 1,
    label: 'Disponible',
    status: AgentStatus.ONLINE,
  },
  {
    id: 2,
    label: 'Ausente',
    status: AgentStatus.AWAY,
  },
  {
    id: 3,
    label: 'Ocupado',
    status: AgentStatus.BUSY,
  },
  {
    id: 4,
    label: 'Desconectado',
    status: AgentStatus.OFFLINE,
  },
] as const satisfies AgentStatusSelectorOption[];
