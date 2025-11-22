import type {
  ContactLatestMessageValues,
  ContactValues,
  ConversationValues,
} from '../interfaces';

export class Contact {
  private id: string;
  private latestConversation: ConversationValues;
  private latestMessage: ContactLatestMessageValues;
  private name: string;
  private phoneNumber: string;

  constructor(
    id: string,
    latestConversation: ConversationValues,
    latestMessage: ContactLatestMessageValues,
    name: string,
    phoneNumber: string,
  ) {
    this.id = id;
    this.latestConversation = latestConversation;
    this.latestMessage = latestMessage;
    this.name = name;
    this.phoneNumber = phoneNumber;
  }

  public toValues(): ContactValues {
    return {
      id: this.id,
      latestConversation: this.latestConversation,
      latestMessage: this.latestMessage,
      name: this.name,
      phoneNumber: this.phoneNumber,
    };
  }
}
