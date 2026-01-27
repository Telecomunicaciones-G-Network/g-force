import type { ConversationStatus } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

/**
 * Conversation interface
 *
 * This interface represents a conversation in the chat system.
 *
 * @property id - The id of the conversation.
 * @property agent - The agent of the conversation.
 * @property status - The status of the conversation.
 * @property team - The team of the conversation.
 */
export interface Conversation {
  id: string;
  agent: Omit<Agent, 'status' | 'teams'> | null;
  status: ConversationStatus;
  team: Team | null;
}
