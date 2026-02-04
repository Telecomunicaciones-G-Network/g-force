import type { Contact as ContactValues, Conversation } from '../interfaces';
import type { ContactLatestMessage, ContactPlatform } from '../types';

/**
 * @name Contact
 *
 * @description This entity represents a contact in the chat system.
 *
 * @property {string} id - The ID of the contact.
 * @property {Conversation} latestConversation - The latest conversation of the contact.
 * @property {ContactLatestMessage} latestMessage - The latest message of the contact.
 * @property {string} name - The name of the contact.
 * @property {string} phoneNumber - The phone number of the contact.
 * @property {number} unreadCount - The unread count of the contact.
 */
export class Contact {
  /**
   * Constructor
   */
  constructor(
    public id: string,
    public latestConversation: Conversation,
    public latestMessage: ContactLatestMessage,
    public name: string,
    public phoneNumber: string,
    public platform: ContactPlatform,
    public unreadCount: number = 0,
  ) {}

  /**
   * @name getValues
   *
   * @description Convert the contact to values
   *
   * @returns {ContactValues} The contact values
   */
  public getValues(): ContactValues {
    return {
      id: this.id,
      latestConversation: this.latestConversation,
      latestMessage: this.latestMessage,
      name: this.name,
      phoneNumber: this.phoneNumber,
      platform: this.platform,
      unreadCount: this.unreadCount,
    };
  }
}
