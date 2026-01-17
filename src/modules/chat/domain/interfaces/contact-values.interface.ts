import type { Conversation } from './conversation.interface';
import type { MessageValues } from './message-values.interface';

export type ContactLatestMessageValues = Pick<
  MessageValues,
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
