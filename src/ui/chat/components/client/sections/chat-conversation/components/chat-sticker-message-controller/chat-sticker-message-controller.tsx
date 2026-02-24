import type { ChatConversationControllerProps } from '../chat-conversation-controller';

import { ChatImageMessageController } from '../chat-image-message-controller';

export const ChatStickerMessageController = ({
  message,
}: Readonly<ChatConversationControllerProps>) => (
  <ChatImageMessageController message={message} />
);

