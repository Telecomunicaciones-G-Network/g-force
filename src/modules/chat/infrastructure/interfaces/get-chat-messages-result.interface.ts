// DONE:

import type {
  ContactPlatform,
  MessageDirection,
  MessageStatus,
  MessageType,
} from '../../domain/types';

export interface GetChatMessagesResultContact {
  birthday: string;
  emails: string[];
  formattedName: string;
  phoneNumbers: string[];
  urls: string[];
}

export interface GetChatMessagesResultLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface GetChatMessagesResultMedia {
  mimeType: string;
  type: string;
  url: string;
}

export interface GetChatMessagesResultReaction {
  agentId: string;
  contactId: string;
  emoji: string;
}

export interface GetChatMessagesResultSender {
  id: string;
  name: string;
}

export interface GetChatMessagesResult {
  id: string;
  caption: string;
  contacts: GetChatMessagesResultContact[];
  conversationId: string;
  createdAt: string;
  deliveredAt: string;
  direction: MessageDirection;
  extraMetadata: Record<string, unknown>;
  failedAt: string | null;
  forwardedManyTimes: boolean;
  forwarded: boolean;
  location: GetChatMessagesResultLocation;
  media: GetChatMessagesResultMedia;
  platformId: string;
  platform: ContactPlatform;
  reactions: GetChatMessagesResultReaction[];
  readAt: string | null;
  sender: GetChatMessagesResultSender;
  sentAt: string;
  status: MessageStatus;
  text: string;
  type: MessageType;
}
