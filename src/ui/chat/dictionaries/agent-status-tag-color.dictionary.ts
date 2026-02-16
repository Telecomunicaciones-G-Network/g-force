import type { AgentStatus } from '@module-chat/domain/types';
import type { TagColor } from '@gnetwork-ui/components/molecules/tags/tag/types';

import { AgentStatus as AgentStatusValues } from '@module-chat/domain/enums/agent-status.enum';

import { TagColors } from '@gnetwork-ui/components/molecules/tags/tag/enums/tag-colors.enum';

/**
 * @name agentStatusTagColorDictionary
 *
 * @description This dictionary returns the color for each agent status.
 *
 * @returns {Record<AgentStatus, TagColor>} The agent status tag color dictionary
 */
export const agentStatusTagColorDictionary = {
  [AgentStatusValues.AWAY]: TagColors.YELLOW,
  [AgentStatusValues.BUSY]: TagColors.RED,
  [AgentStatusValues.OFFLINE]: TagColors.GRAY,
  [AgentStatusValues.ONLINE]: TagColors.GREEN,
} as const satisfies Record<AgentStatus, TagColor>;
