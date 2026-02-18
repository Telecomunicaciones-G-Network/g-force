import type { MessageEventData } from '@module-chat/domain/interfaces';

export interface ChatConversationEventConversationCreatedMessageProps {
  createdAt?: string;
  eventData: MessageEventData | null;
}
