import type { Contact as ContactValues, Conversation } from '../interfaces';
import type { ContactLatestMessage } from '../types';

/**
 * Contact entity
 *
 * This entity represents a contact in the chat system.
 */
export class Contact {
  /**
   * Constructor
   *
   * @param id - The id of the contact.
   * @param latestConversation - The latest conversation of the contact.
   * @param latestMessage - The latest message of the contact.
   * @param name - The name of the contact.
   * @param phoneNumber - The phone number of the contact.
   * @param unreadCount - The unread count of the contact.
   */
  constructor(
    public id: string,
    public latestConversation: Conversation,
    public latestMessage: ContactLatestMessage,
    public name: string,
    public phoneNumber: string,
    public unreadCount: number = 0,
  ) {}

  /**
   * Convert the contact to values
   *
   * @returns The contact values
   */
  public getValues(): ContactValues {
    return {
      id: this.id,
      latestConversation: this.latestConversation,
      latestMessage: this.latestMessage,
      name: this.name,
      phoneNumber: this.phoneNumber,
      unreadCount: this.unreadCount,
    };
  }
}
