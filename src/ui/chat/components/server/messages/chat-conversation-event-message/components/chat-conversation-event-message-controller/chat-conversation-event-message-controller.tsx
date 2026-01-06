import type { ChatConversationEventMessageProps } from '../../chat-conversation-event-message.props';

import { EventTypes } from '@module-chat/domain/enums/event-types.enum';

import { ChatConversationEventConversationAssigmentUpdatedMessage } from '../chat-conversation-event-conversation-assigment-updated-message';

export const ChatConversationEventMessageController = ({
  eventData,
}: Readonly<ChatConversationEventMessageProps>) => {
  if (!eventData) return null;

  switch (eventData?.eventType) {
    case EventTypes.CONVERSATION_ASSIGNMENT_UPDATED:
      return (
        <ChatConversationEventConversationAssigmentUpdatedMessage
          eventData={eventData}
        />
      );
    default:
      return null;
  }
};
