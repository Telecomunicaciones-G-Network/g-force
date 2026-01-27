import type { MessageEventType } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

/**
 * Message event data interface
 *
 * @property agent - The agent of the message event
 * @property assignedByAgent - The assigned by agent of the message event
 * @property eventType - The event type of the message event
 * @property previousAgent - The previous agent of the message event
 * @property previousTeam - The previous team of the message event
 * @property team - The team of the message event
 * @property timestamp - The timestamp of the message event
 */
export interface MessageEventData {
  agent: Omit<Agent, 'status' | 'teams'> | null;
  assignedByAgent: Omit<Agent, 'status' | 'teams'> | null;
  eventType: MessageEventType;
  previousAgent: Omit<Agent, 'status' | 'teams'> | null;
  previousTeam: Team;
  team: Team;
  timestamp: string;
}
