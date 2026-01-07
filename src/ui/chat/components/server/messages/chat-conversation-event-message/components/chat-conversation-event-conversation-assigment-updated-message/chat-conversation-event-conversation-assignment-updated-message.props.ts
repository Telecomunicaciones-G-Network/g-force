import type { MessageEventDataValues } from '@module-chat/domain/interfaces';

export interface ChatConversationEventConversationAssignmentUpdatedMessageProps {
  createdAt?: string;
  eventData: MessageEventDataValues | null;
}
