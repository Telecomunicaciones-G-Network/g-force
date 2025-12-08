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
  download_url: string;
  filename: string;
  id: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

export interface GetChatMessagesResultReaction {
  agent_id: string;
  contact_id: string;
  emoji: string;
}

export interface GetChatMessagesResultSender {
  id: string;
  is_bot: boolean;
  name: string;
}

export interface GetChatMessagesResult {
  id: string;
  caption: string | null;
  contacts: GetChatMessagesResultContact[];
  conversation_id: string;
  created_at: string;
  delivered_at: string | null;
  direction: MessageDirection;
  extra_metadata: Record<string, unknown> | null;
  failed_at: string | null;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: GetChatMessagesResultLocation | null;
  media: GetChatMessagesResultMedia | null;
  platform_id: string;
  platform: ContactPlatform;
  reactions: GetChatMessagesResultReaction[];
  read_at: string | null;
  sender: GetChatMessagesResultSender;
  sent_at: string | null;
  status: MessageStatus;
  text: string | null;
  type: MessageType;
  updated_at: string | null;
}
