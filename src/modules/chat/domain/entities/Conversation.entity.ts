import type {
  Agent,
  Conversation as ConversationValues,
  Team,
} from '../interfaces';
import type { ConversationStatus } from '../types';

/**
 * Conversation entity
 *
 * This entity represents a conversation in the chat system.
 */
export class Conversation {
  /**
   * Constructor
   *
   * @param id - The id of the conversation.
   * @param agent - The agent of the conversation.
   * @param status - The status of the conversation.
   * @param team - The team of the conversation.
   */
  constructor(
    public id: string,
    public agent: Agent | null = null,
    public status: ConversationStatus,
    public team: Team | null = null,
  ) {}

  /**
   * Convert the conversation to values
   *
   * @returns The conversation values
   */
  public toValues(): ConversationValues {
    return {
      id: this.id,
      agent: this.agent,
      status: this.status,
      team: this.team,
    };
  }
}
