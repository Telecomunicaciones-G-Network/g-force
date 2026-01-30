/**
 * @name MessageSender
 *
 * @description This interface represents the values of a message sender.
 *
 * @property {string} id - The id of the sender.
 * @property {boolean} isBot - Whether the sender is a bot.
 * @property {string} name - The name of the sender.
 */
export interface MessageSender {
  id: string;
  isBot: boolean;
  name: string;
}
