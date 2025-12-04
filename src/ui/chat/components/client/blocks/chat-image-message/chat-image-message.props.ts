import type { ChatImageMessageProps as ChatImageMessagePropsBase } from '@gnetwork-ui/components/organisms/blocks/chat-image-message';

export interface ChatImageMessageProps
  extends Omit<ChatImageMessagePropsBase, 'imageUrl'> {
  mediaId: string;
}
