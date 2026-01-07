import type { ChatConversationEventMessageProps } from './chat-conversation-event-message.props';

import { ChatConversationEventMessageController } from './components/chat-conversation-event-message-controller';

export const ChatConversationEventMessage = (
  props: Readonly<ChatConversationEventMessageProps>,
) => <ChatConversationEventMessageController {...props} />;
