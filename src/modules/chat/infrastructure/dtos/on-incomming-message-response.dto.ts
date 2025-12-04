import type {
  MessageContactValues,
  MessageLocationValues,
} from '../../domain/interfaces';
import type { MediaType, MessageType } from '../../domain/types';

export interface OnIncommingMesssageResponseMedia {
  media_id: string;
  mime_type: string;
  storage_bucket: string;
  storage_path: string;
  type: MediaType;
}

export interface OnIncommingMessageResponseDTO {
  caption: string | null;
  contacts: MessageContactValues[] | null;
  conversation_id: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: MessageLocationValues | null;
  media: OnIncommingMesssageResponseMedia | null;
  message_id: string;
  reply_to_message_id: string | null;
  text: string | null;
  timestamp: string;
  type: MessageType;
}
