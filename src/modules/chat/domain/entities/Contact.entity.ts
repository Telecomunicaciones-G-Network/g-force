import type {
  ContactLatestMessageValues,
  ContactValues,
  ConversationValues,
} from '../interfaces';

export class Contact {
  constructor(
    public id: string,
    public latestConversation: ConversationValues,
    public latestMessage: ContactLatestMessageValues,
    public name: string,
    public phoneNumber: string,
    public unreadCount: number = 0,
  ) {}

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
