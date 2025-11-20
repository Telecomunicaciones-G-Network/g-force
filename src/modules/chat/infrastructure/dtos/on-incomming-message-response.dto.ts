import type { MessageType } from '../../domain/types';

export interface OnIncommingMessageResponseContact {
  birthday: string;
  emails: string[];
  formattedName: string;
  phoneNumbers: string[];
  urls: string[];
}

export interface OnIncommingMessageResponseLocation {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
}

export interface OnIncommingMessageResponseMedia {
  mimeType: string;
  type: string;
  url: string;
}

export interface OnIncommingMessageResponseDTO {
  caption: string | null;
  contacts: OnIncommingMessageResponseLocation[] | null;
  conversation_id: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: OnIncommingMessageResponseLocation | null;
  media: OnIncommingMessageResponseMedia | null;
  message_id: string;
  reply_to_message_id: string | null;
  text: string;
  timestamp: string;
  type: MessageType;
}
