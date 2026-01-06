import type { ChatConversationEventMessageProps } from './chat-conversation-event-message.props';

import { ChatConversationEventMessageController } from './components/chat-conversation-event-message-controller';

export const ChatConversationEventMessage = ({
  eventData,
}: Readonly<ChatConversationEventMessageProps>) => (
  <ChatConversationEventMessageController eventData={eventData} />
);
