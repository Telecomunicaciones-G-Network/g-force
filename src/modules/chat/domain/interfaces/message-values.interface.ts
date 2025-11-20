// DONE:

import type {
  MessageDirection,
  MessageStatus,
  MessageType,
  Platform,
} from '../types';
import type { MediaValues } from './media-values.interface';

export interface MessageContactValues {
  birthday: string;
  emails: string[];
  name: string;
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
  caption?: string;
  contacts?: MessageContactValues[];
  conversationId?: string;
  createdAt: string;
  deliveredAt?: string;
  direction: MessageDirection;
  failedAt?: string;
  forwarded?: boolean;
  forwardedManyTimes?: boolean;
  location?: MessageLocationValues;
  media?: MediaValues;
  platform?: Platform;
  platformId?: string;
  reactions?: MessageReactionValues[];
  readAt?: string;
  sender: MessageSenderValues;
  sentAt?: string;
  status: MessageStatus;
  text: string;
  type: MessageType;
}
