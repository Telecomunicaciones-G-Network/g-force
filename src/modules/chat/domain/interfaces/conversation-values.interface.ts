import type { ConversationStatus } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

export interface ConversationValues {
  id: string;
  agent: Omit<Agent, 'teams'> | null;
  status: ConversationStatus;
  team: Team | null;
}
