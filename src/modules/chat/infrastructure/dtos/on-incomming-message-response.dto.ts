import type {
  MediaStorageStatus,
  MediaType,
  MessageType,
} from '../../domain/types';

export interface OnIncommingMessageResponseContact {
  birthday: string;
  emails: string[];
  formatted_name: string;
  phone_numbers: string[];
  urls: string[];
}

export interface OnIncommingMessageResponseLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface OnIncommingMesssageResponseMedia {
  media_id: string;
  mime_type: string;
  storage_status: MediaStorageStatus;
  type: MediaType;
}

export interface OnIncommingMessageResponseDTO {
  caption: string | null;
  contacts: OnIncommingMessageResponseContact[] | null;
  conversation_id: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: OnIncommingMessageResponseLocation | null;
  media: OnIncommingMesssageResponseMedia | null;
  message_id: string;
  reply_to_message_id: string | null;
  text: string | null;
  timestamp: string;
  type: MessageType;
}
