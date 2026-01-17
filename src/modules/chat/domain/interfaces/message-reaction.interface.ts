/**
 * Message reaction interface
 *
 * @property {string} agentId - The ID of the agent
 * @property {string} contactId - The ID of the contact
 * @property {string} emoji - The emoji of the reaction
 */
export interface MessageReaction {
  agentId: string;
  contactId: string;
  emoji: string;
}
