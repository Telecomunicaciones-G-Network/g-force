// DONE:

import type { ConversationStatus } from '../types';
import type { AgentValues } from './agent-values.interface';
import type { TeamValues } from './team-values.interface';

export interface ConversationValues {
  id: string;
  agent: AgentValues;
  status: ConversationStatus;
  team: TeamValues;
}
