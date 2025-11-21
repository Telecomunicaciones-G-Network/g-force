import type { ConversationValues } from './conversation-values.interface';
import type { MessageValues } from './message-values.interface';

export interface ContactValues {
  id: string;
  latestConversation: ConversationValues;
  latestMessage: MessageValues;
  name: string;
}
