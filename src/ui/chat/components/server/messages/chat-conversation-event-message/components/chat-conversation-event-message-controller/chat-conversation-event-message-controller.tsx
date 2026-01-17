import type { ChatConversationEventMessageProps } from '../../chat-conversation-event-message.props';

import { MessageEventTypes } from '@module-chat/domain/enums/message-event-types.enum';

import { ChatConversationEventConversationAssignmentUpdatedMessage } from '../chat-conversation-event-conversation-assigment-updated-message';

export const ChatConversationEventMessageController = ({
  message,
}: Readonly<ChatConversationEventMessageProps>) => {
  const { eventData, createdAt } = message;

  if (!eventData) return null;

  switch (eventData?.eventType) {
    case MessageEventTypes.CONVERSATION_ASSIGNMENT_UPDATED:
      return (
        <ChatConversationEventConversationAssignmentUpdatedMessage
          createdAt={createdAt}
          eventData={eventData}
        />
      );
    default:
      return null;
  }
};
