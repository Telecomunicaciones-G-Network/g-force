import type {
  ContactValues,
  ConversationValues,
  MessageValues,
} from '../interfaces';

export class Contact {
  private id: string;
  private latestConversation: ConversationValues;
  private latestMessage: MessageValues;
  private name: string;

  constructor(
    id: string,
    latestConversation: ConversationValues,
    latestMessage: MessageValues,
    name: string,
  ) {
    this.id = id;
    this.latestConversation = latestConversation;
    this.latestMessage = latestMessage;
    this.name = name;
  }

  public toValues(): ContactValues {
    return {
      id: this.id,
      latestConversation: this.latestConversation,
      latestMessage: this.latestMessage,
      name: this.name,
    };
  }
}
