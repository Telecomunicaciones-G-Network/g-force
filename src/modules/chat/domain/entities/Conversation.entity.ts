import type {
  Agent,
  Conversation as ConversationValues,
  Team,
} from '../interfaces';
import type { ConversationStatus } from '../types';

/**
 * @name Conversation
 *
 * @description This entity represents a conversation in the chat system.
 *
 * @property {string} id - The ID of the conversation.
 * @property {Agent | null} agent - The agent assigned to the conversation.
 * @property {ConversationStatus} status - The current status of the conversation.
 * @property {Team | null} team - The team associated with the conversation.
 */
export class Conversation {
  /**
   * Constructor
   */
  constructor(
    public id: string,
    public agent: Agent | null = null,
    public status: ConversationStatus,
    public team: Team | null = null,
  ) {}

  /**
   * @name toValues
   *
   * @description Convert the conversation to values
   *
   * @returns {ConversationValues} The conversation values
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
