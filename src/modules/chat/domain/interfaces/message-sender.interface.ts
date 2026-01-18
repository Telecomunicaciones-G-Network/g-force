/**
 * Message sender interface
 *
 * @property id - The ID of the sender
 * @property isBot - Whether the sender is a bot
 * @property name - The name of the sender
 */
export interface MessageSender {
  id: string;
  isBot: boolean;
  name: string;
}
