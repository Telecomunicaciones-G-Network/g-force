import type { ApiResponse } from '@module-core/interfaces';
import type {
  ContactPlatform,
  MessageDirection,
  MessageStatus,
  MessageType,
} from '../types';
import type { AgentValues } from './agent-values.interface';
import type { ConversationValues } from './conversation-values.interface';

export type GetContactsResultLastestMessage = {
  created_at: Date;
  direction: MessageDirection;
  id: string;
  sender: AgentValues;
  status: MessageStatus;
  text_preview: string;
  type: MessageType;
};

export interface GetContactsResult {
  contact_id: string;
  latest_conversation: ConversationValues;
  latest_message: GetContactsResultLastestMessage;
  platform_id: string;
  platform: ContactPlatform;
}

export type GetContactsResponse = ApiResponse<GetContactsResult[]>;
