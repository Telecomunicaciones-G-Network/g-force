import type {
  ContactPlatform,
  MediaType,
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
  filename: string;
  id: string;
  mimeType: string;
  type: MediaType;
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
  caption: string | null;
  contacts: GetChatMessagesResultContact[];
  conversationId: string;
  createdAt: string;
  deliveredAt: string | null;
  direction: MessageDirection;
  extraMetadata: Record<string, unknown> | null;
  failedAt: string | null;
  forwarded: boolean;
  forwardedManyTimes: boolean;
  location: GetChatMessagesResultLocation | null;
  media: GetChatMessagesResultMedia | null;
  platform: ContactPlatform;
  platformId: string;
  reactions: GetChatMessagesResultReaction[];
  readAt: string | null;
  sender: GetChatMessagesResultSender;
  sentAt: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updatedAt: string | null;
}
