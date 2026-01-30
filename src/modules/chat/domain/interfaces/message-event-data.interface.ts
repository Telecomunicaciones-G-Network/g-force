import type { MessageEventType } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

/**
 * @name MessageEventData
 *
 * @description This interface represents the values of a message event data.
 *
 * @property {Omit<Agent, 'status' | 'teams'> | null} agent - The agent of the message event.
 * @property {Omit<Agent, 'status' | 'teams'> | null} assignedByAgent - The agent who assigned this event.
 * @property {MessageEventType} eventType - The type of the message event.
 * @property {Omit<Agent, 'status' | 'teams'> | null} previousAgent - The previous agent related to the event.
 * @property {Team} previousTeam - The previous team related to the event.
 * @property {Team} team - The current team of the message event.
 * @property {string} timestamp - The timestamp of the message event.
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
