import type { Conversation } from './conversation.interface';
import type { Message } from './message.interface';

export type ContactLatestMessageValues = Pick<
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

export interface ContactValues {
  id: string;
  latestConversation: Conversation;
  latestMessage: ContactLatestMessageValues;
  name: string;
  phoneNumber: string;
  unreadCount: number;
}
