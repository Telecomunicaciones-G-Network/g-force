import type { ChatConversationControllerProps } from './chat-conversation-controller.props';

import { MessageTypes } from '@module-chat/domain/enums/message-types.enum';

import { ChatAudioMessageController } from '../chat-audio-message-controller';
import { ChatContactsMessageController } from '../chat-contacts-message-controller';
import { ChatDocumentMessageController } from '../chat-document-message-controller';
import { ChatImageMessageController } from '../chat-image-message-controller';
import { ChatLocationMessageController } from '../chat-location-message-controller';
import { ChatStickerMessageController } from '../chat-sticker-message-controller';
import { ChatTextMessageController } from '../chat-text-message-controller';
import { ChatUnknownMessageController } from '../chat-unknown-message-controller';
import { ChatVideoMessageController } from '../chat-video-message-controller';

export const ChatConversationController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => {
  if (!message || !message?.id) return null;

  switch (message?.type) {
    case MessageTypes.AUDIO:
      return <ChatAudioMessageController message={message} />;
    case MessageTypes.CONTACTS:
      return <ChatContactsMessageController message={message} />;
    case MessageTypes.DOCUMENT:
      return <ChatDocumentMessageController message={message} />;
    case MessageTypes.FLOW_BUTTON:
      return <ChatTextMessageController message={message} />;
    case MessageTypes.IMAGE:
      return <ChatImageMessageController message={message} />;
    case MessageTypes.INTERACTIVE_LIST_OPTIONS:
      return <ChatTextMessageController message={message} />;
    case MessageTypes.INTERACTIVE_LIST_SELECTION:
      return <ChatTextMessageController message={message} />;
    case MessageTypes.LOCATION:
      return <ChatLocationMessageController message={message} />;
    case MessageTypes.STICKER:
      return <ChatStickerMessageController message={message} />;
    case MessageTypes.TEXT:
      return <ChatTextMessageController message={message} />;
    case MessageTypes.VIDEO:
      return <ChatVideoMessageController message={message} />;
    default:
      return <ChatUnknownMessageController message={message} />;
  }
};
