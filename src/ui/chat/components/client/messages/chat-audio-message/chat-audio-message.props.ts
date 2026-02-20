import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';

export interface ChatAudioMessageProps extends ChatMessageProps {
  filename?: string;
  mediaId: string;
  mimeType?: string;
}
