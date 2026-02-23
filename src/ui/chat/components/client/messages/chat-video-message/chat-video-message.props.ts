import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

export interface ChatVideoMessageProps extends ChatMessageProps {
  filename?: string;
  mediaId: string;
  mimeType?: string;
}
