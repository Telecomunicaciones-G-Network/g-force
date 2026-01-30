import type { Conversation } from './conversation.interface';
import type { ContactLatestMessage } from '../types';

/**
 * @name Contact
 *
 * @description This interface represents the values of a contact.
 *
 * @property {string} id - The ID of the contact.
 * @property {Conversation} latestConversation - The latest conversation of the contact.
 * @property {ContactLatestMessage} latestMessage - The latest message of the contact.
 * @property {string} name - The name of the contact.
 * @property {string} phoneNumber - The phone number of the contact.
 * @property {number} unreadCount - The unread count of the contact.
 */
export interface Contact {
  id: string;
  latestConversation: Conversation;
  latestMessage: ContactLatestMessage;
  name: string;
  phoneNumber: string;
  unreadCount: number;
}
