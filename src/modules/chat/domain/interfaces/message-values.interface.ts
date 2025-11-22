import type { MessageDirection, MessageStatus, MessageType } from '../types';
import type { MediaValues } from './media-values.interface';

export interface MessageContactValues {
  birthday: string;
  emails: string[];
  formattedName: string;
  phoneNumbers: string[];
  urls: string[];
}

export interface MessageLocationValues {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface MessageReactionValues {
  agentId: string;
  contactId: string;
  emoji: string;
}

export interface MessageSenderValues {
  id: string;
  name: string;
}

export interface MessageValues {
  id: string;
  caption: string | null;
  contacts: MessageContactValues[];
  conversationId: string;
  createdAt: string;
  deliveredAt: string | null;
  direction: MessageDirection;
  failedAt: string | null;
  forwarded: boolean;
  forwardedManyTimes: boolean;
  location: MessageLocationValues | null;
  media: MediaValues | null;
  reactions: MessageReactionValues[];
  readAt: string | null;
  sender: MessageSenderValues;
  sentAt: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updatedAt: string | null;
}
