import type { MessageEventType } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

/**
 * @name MessageEventDataAgent
 *
 * @description This interface represents the values of a message event data agent.
 *
 * @property {string} id - The id of the agent.
 * @property {string} name - The name of the agent.
 */
export type MessageEventDataAgent = Pick<Agent, 'id' | 'name'>;

/**
 * @name MessageEventData
 *
 * @description This interface represents the values of a message event data.
 *
 * @property {MessageEventDataAgent | null} agent - The agent of the message event.
 * @property {MessageEventDataAgent | null} assignedByAgent - The agent who assigned this event.
 * @property {MessageEventType} eventType - The type of the message event.
 * @property {MessageEventDataAgent| null} finishedByAgent - The agent who finished this event.
 * @property {MessageEventDataAgent | null} previousAgent - The previous agent related to the event.
 * @property {Team} previousTeam - The previous team related to the event.
 * @property {Team} team - The current team of the message event.
 * @property {string} timestamp - The timestamp of the message event.
 */
export interface MessageEventData {
  agent: MessageEventDataAgent | null;
  assignedByAgent: MessageEventDataAgent | null;
  eventType: MessageEventType;
  finishedByAgent: MessageEventDataAgent | null;
  previousAgent: MessageEventDataAgent | null;
  previousTeam: Team;
  team: Team;
  timestamp: string;
}
