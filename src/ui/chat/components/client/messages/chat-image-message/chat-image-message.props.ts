import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

export interface ChatImageMessageProps extends ChatMessageProps {
  filename?: string;
  imageAlt?: string;
  mediaId: string;
  mimeType?: string;
}
