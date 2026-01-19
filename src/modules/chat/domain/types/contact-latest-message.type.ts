import type { Message } from '../interfaces/message.interface';

/**
 * Contact latest message type
 *
 * This type represents the latest message of a contact.
 *
 * @property id - The ID of the message
 * @property createdAt - The creation date of the message
 * @property direction - The direction of the message
 * @property sender - The sender of the message
 * @property status - The status of the message
 * @property text - The text of the message
 * @property type - The type of the message
 * @property updatedAt - The update date of the message
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
