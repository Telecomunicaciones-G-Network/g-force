// DONE:

import type { MessageDirection, MessageStatus, MessageType } from '../types';

export interface MessageSenderValues {
  id: string;
  name: string;
}

export interface MessageValues {
  id: string;
  conversationId?: string;
  createdAt: string;
  deliveredAt?: string;
  direction: MessageDirection;
  failedAt?: string | null;
  readAt?: string | null;
  sender: MessageSenderValues;
  sentAt?: string;
  status: MessageStatus;
  text: string;
  type: MessageType;
}
