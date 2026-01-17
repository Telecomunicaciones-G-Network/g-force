import type { Conversation } from './conversation.interface';
import type { ContactLatestMessage } from '../types';

/**
 * Contact values interface
 *
 * This interface represents the values of a contact.
 *
 * @param id - The ID of the contact
 * @param latestConversation - The latest conversation of the contact
 * @param latestMessage - The latest message of the contact
 * @param name - The name of the contact
 * @param phoneNumber - The phone number of the contact
 * @param unreadCount - The unread count of the contact
 */
export interface Contact {
  id: string;
  latestConversation: Conversation;
  latestMessage: ContactLatestMessage;
  name: string;
  phoneNumber: string;
  unreadCount: number;
}
