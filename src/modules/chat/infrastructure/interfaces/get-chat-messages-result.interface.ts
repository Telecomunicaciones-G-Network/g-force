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
  formatted_name: string;
  phone_numbers: string[];
  urls: string[];
}

export interface GetChatMessagesResultLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface GetChatMessagesResultMedia {
  mime_type: string;
  type: string;
  url: string;
}

export interface GetChatMessagesResultReaction {
  agent_id: string;
  contact_id: string;
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
  conversation_id: string;
  created_at: string;
  delivered_at: string;
  direction: MessageDirection;
  extra_metadata: Record<string, unknown>;
  failed_at: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: GetChatMessagesResultLocation;
  media: GetChatMessagesResultMedia;
  platform_id: string;
  platform: ContactPlatform;
  reactions: GetChatMessagesResultReaction[];
  read_at: string;
  sender: GetChatMessagesResultSender;
  sent_at: string;
  status: MessageStatus;
  text: string;
  type: MessageType;
}
