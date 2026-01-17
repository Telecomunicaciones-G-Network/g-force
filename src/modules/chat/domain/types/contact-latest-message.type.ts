import type { Message } from '../interfaces/message.interface';

export type ContactLatestMessage = Pick<
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
