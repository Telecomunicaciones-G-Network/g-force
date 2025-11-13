import type { ApiResponse } from '@module-core/interfaces';
import type { ContactPlatform } from '../types';

import { Conversation } from '../entities/Conversation.entity';
import { Message } from '../entities/Message.entity';

export interface GetContactResultLatestMessage
  extends Omit<Message, 'createAt' | 'textPreview'> {
  created_at: Date;
  text_preview: string;
}

export interface GetContactResult {
  contact_id: string;
  latest_conversation: Conversation;
  latest_message: Message;
  platform_id: string;
  platform: ContactPlatform;
}

export type GetContactsResponse = ApiResponse<GetContactResult[]>;
