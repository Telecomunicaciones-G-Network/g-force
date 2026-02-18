import type { ChatConversationEventMessageProps } from '../../chat-conversation-event-message.props';

import { MessageEventTypes } from '@module-chat/domain/enums/message-event-types.enum';

import { ChatConversationEventConversationAssignmentUpdatedMessage } from '../chat-conversation-event-conversation-assigment-updated-message';
import { ChatConversationEventConversationFinishedMessage } from '../chat-conversation-event-conversation-finished-message';
import { ChatConversationEventConversationCreatedMessage } from '../chat-conversation-event-conversation-created-message';

/**
 * @name ChatConversationEventMessageController
 *
 * @description This component is used to render a chat conversation event message.
 *
 * @param {ChatConversationEventMessageProps} props - The props of the component.
 *
 * // TODO: Spreed all props over components to make cleaners
 */
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
    case MessageEventTypes.CONVERSATION_CREATED:
      return (
        <ChatConversationEventConversationCreatedMessage
          createdAt={createdAt}
          eventData={eventData}
        />
      );
    case MessageEventTypes.CONVERSATION_FINISHED:
      return (
        <ChatConversationEventConversationFinishedMessage
          createdAt={createdAt}
          eventData={eventData}
        />
      );
    default:
      return null;
  }
};
