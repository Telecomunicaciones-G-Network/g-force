// CHECKED:

import type { ConversationStatus } from '../types';
import type { AgentValues } from './agent-values.interface';
import type { TeamValues } from './team-values.interface';

export interface ConversationValues {
  agent: AgentValues;
  id: string;
  status: ConversationStatus;
  team: TeamValues;
}
