import type { ChatConversationControllerProps } from './chat-conversation-controller.props';

import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { ChatImageController } from '../chat-image-controller';
import { ChatTextMessageController } from '../chat-text-message-controller';

export const ChatConversationController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  if (!message || !message?.id) return null;

  switch (message?.type) {
    case MessageTypes.IMAGE:
      return <ChatImageController message={message} />;
    case MessageTypes.TEXT:
      return <ChatTextMessageController message={message} />;
    default:
      return null;
  }
};
