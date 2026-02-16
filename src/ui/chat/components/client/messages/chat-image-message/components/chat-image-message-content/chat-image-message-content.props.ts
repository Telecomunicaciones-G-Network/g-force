import type { ReactChild } from '@gnetwork-ui/types';
import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';
import type { ChatImageMessageProps } from '@ui-chat/components/client/messages/chat-image-message';

export interface ChatImageMessageContentProps
  extends ChatMessageProps,
    Pick<ChatImageMessageProps, 'imageAlt' | 'filename' | 'mimeType'> {
  customImageComponent?: ReactChild;
  imageSrc?: string;
}
