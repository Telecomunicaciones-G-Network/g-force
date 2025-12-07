import type { ReactChild } from '@gnetwork-ui/types';
import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

export interface ChatImageMessageContentProps extends ChatMessageProps {
  customImageComponent?: ReactChild;
  filename?: string;
  imageAlt?: string;
  imageUrl?: string;
  mimeType?: string;
}
