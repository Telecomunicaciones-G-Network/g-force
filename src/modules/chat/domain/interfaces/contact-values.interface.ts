// CHECKED:

import type { ContactPlatform } from '../types';
import type { ConversationValues } from './conversation-values.interface';
import type { MessageValues } from './message-values.interface';

export interface ContactValues {
  id: string;
  name: string;
  platform: ContactPlatform;
  latestConversation: ConversationValues;
  latestMessage: MessageValues;
}
