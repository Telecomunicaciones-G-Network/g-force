import type { MessageEventData } from '@module-chat/domain/interfaces';

export interface ChatConversationEventConversationFinishedMessageProps {
  createdAt?: string;
  eventData: MessageEventData | null;
}
