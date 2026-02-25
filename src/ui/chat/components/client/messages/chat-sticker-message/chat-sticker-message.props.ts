import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

export interface ChatStickerMessageProps extends ChatMessageProps {
  imageAlt?: string;
  mediaId: string;
}
