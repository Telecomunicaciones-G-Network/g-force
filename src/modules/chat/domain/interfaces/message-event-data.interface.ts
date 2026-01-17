import type { MessageEventType } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

export interface MessageEventData {
  agent: Omit<Agent, 'teams'> | null;
  assignedByAgent: Omit<Agent, 'teams'> | null;
  eventType: MessageEventType;
  previousAgent: Omit<Agent, 'teams'> | null;
  previousTeam: Team;
  team: Team;
  timestamp: string;
}
