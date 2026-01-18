/**
 * Message reaction interface
 *
 * @property agentId - The ID of the agent
 * @property contactId - The ID of the contact
 * @property emoji - The emoji of the reaction
 */
export interface MessageReaction {
  agentId: string;
  contactId: string;
  emoji: string;
}
