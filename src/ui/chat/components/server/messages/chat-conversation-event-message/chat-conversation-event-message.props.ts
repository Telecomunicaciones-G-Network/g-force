import type { MessageEventDataValues } from '@module-chat/domain/interfaces';

export interface ChatConversationEventMessageProps {
  eventData: MessageEventDataValues | null;
}
