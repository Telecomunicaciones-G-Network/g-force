import type { ContactPlatform } from '../types';

import { Conversation } from './Conversation.entity';
import { Message } from './Message.entity';

export class Contact {
  id: string;

  latestConversation: Conversation;

  latestMessage: Message;

  platform: ContactPlatform;

  platformId: string;
}
