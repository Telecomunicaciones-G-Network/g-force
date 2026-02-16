import type { MessageEventData } from '@module-chat/domain/interfaces';

export interface ChatConversationEventConversationAssignmentUpdatedMessageProps {
  createdAt?: string;
  eventData: MessageEventData | null;
}
