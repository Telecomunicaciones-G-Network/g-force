import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

import { ChatMessage } from '@gnetwork-ui/components/organisms/messages/chat-message';

export const ChatTextMessage = (props: Readonly<ChatMessageProps>) => {
  const { children, ...rest } = props;

  return <ChatMessage {...rest}>{children}</ChatMessage>;
};
