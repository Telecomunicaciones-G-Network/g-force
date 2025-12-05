import type {
  ContactPlatform,
  MediaStorageStatus,
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
  id: string;
  downloadUrl: string;
  filename: string;
  mimeType: string;
  storageStatus: MediaStorageStatus;
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
  id: string;
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
