import type { ConversationStatus } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

/**
 * @name Conversation
 *
 * @description This interface represents the values of a conversation.
 *
 * @property {string} id - The id of the conversation.
 * @property {Omit<Agent, 'status' | 'teams'> | null} agent - The agent of the conversation.
 * @property {ConversationStatus} status - The status of the conversation.
 * @property {Team | null} team - The team of the conversation.
 */
export interface Conversation {
  id: string;
  agent: Omit<Agent, 'status' | 'teams'> | null;
  status: ConversationStatus;
  team: Team | null;
}
