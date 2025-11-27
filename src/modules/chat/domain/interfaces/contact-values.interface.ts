import type { ConversationValues } from './conversation-values.interface';
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
  latestConversation: ConversationValues;
  latestMessage: ContactLatestMessageValues;
  name: string;
  phoneNumber: string;
  unreadCount: number;
}
