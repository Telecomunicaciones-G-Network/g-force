import type {
  MediaValues,
  MessageContactValues,
  MessageLocationValues,
} from '../../domain/interfaces';
import type { MessageType } from '../../domain/types';

export interface OnIncommingMessageResponseDTO {
  message_id: string;
  caption: string | null;
  contacts: MessageContactValues[] | null;
  conversation_id: string;
  forwarded_many_times: boolean;
  forwarded: boolean;
  location: MessageLocationValues | null;
  media: MediaValues | null;
  reply_to_message_id: string | null;
  text: string;
  timestamp: string;
  type: MessageType;
}
