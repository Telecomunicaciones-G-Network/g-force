import type { ConversationStatus } from '../types';
import type { AgentValues } from './agent-values.interface';
import type { TeamValues } from './team-values.interface';

export interface ConversationValues {
  id: string;
  agent: AgentValues | null;
  status: ConversationStatus;
  team: TeamValues | null;
}
