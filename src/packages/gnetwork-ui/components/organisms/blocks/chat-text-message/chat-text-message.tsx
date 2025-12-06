import type { ChatMessageProps } from '../chat-message/chat-message.props';

import { ChatMessage } from '../chat-message';

export const ChatTextMessage = (props: Readonly<ChatMessageProps>) => {
  const { children, ...rest } = props;

  return <ChatMessage {...rest}>{children}</ChatMessage>;
};
