import type { Conversation } from './conversation.interface';
import type { ContactLatestMessage } from '../types';

/**
 * Contact values interface
 *
 * This interface represents the values of a contact.
 *
 * @property id - The ID of the contact
 * @property latestConversation - The latest conversation of the contact
 * @property latestMessage - The latest message of the contact
 * @property name - The name of the contact
 * @property phoneNumber - The phone number of the contact
 * @property unreadCount - The unread count of the contact
 */
export interface Contact {
  id: string;
  latestConversation: Conversation;
  latestMessage: ContactLatestMessage;
  name: string;
  phoneNumber: string;
  unreadCount: number;
}
