import type { ConversationStatus } from '../types';
import type { Agent } from './agent.interface';
import type { Team } from './team.interface';

/**
 * Conversation interface
 *
 * This interface represents a conversation in the chat system.
 *
 * @param id - The id of the conversation.
 * @param agent - The agent of the conversation.
 * @param status - The status of the conversation.
 * @param team - The team of the conversation.
 */
export interface Conversation {
  id: string;
  agent: Omit<Agent, 'teams'> | null;
  status: ConversationStatus;
  team: Team | null;
}
