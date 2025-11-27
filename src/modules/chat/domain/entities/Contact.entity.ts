import type {
  ContactLatestMessageValues,
  ConversationValues,
} from '../interfaces';

export class Contact {
  constructor(
    private id: string,
    private latestConversation: ConversationValues,
    private latestMessage: ContactLatestMessageValues,
    private name: string,
    private phoneNumber: string,
    private unreadCount: number = 0,
  ) {}
}
