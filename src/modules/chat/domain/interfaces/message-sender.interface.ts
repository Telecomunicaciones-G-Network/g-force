/**
 * Message sender interface
 *
 * @property {string} id - The ID of the sender
 * @property {boolean} isBot - Whether the sender is a bot
 * @property {string} name - The name of the sender
 */
export interface MessageSender {
  id: string;
  isBot: boolean;
  name: string;
}
