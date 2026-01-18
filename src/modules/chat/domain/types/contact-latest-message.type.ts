import type { Message } from '../interfaces/message.interface';

/**
 * Contact latest message type
 *
 * This type represents the latest message of a contact.
 *
 * @param id - The ID of the message
 * @param createdAt - The creation date of the message
 * @param direction - The direction of the message
 * @param sender - The sender of the message
 * @param status - The status of the message
 * @param text - The text of the message
 * @param type - The type of the message
 * @param updatedAt - The update date of the message
 */
export type ContactLatestMessage = Pick<
  Message,
  | 'id'
  | 'createdAt'
  | 'direction'
  | 'sender'
  | 'status'
  | 'text'
  | 'type'
  | 'updatedAt'
>;
