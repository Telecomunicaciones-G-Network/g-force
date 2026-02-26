import type { ChatMessageProps } from '@gnetwork-ui/components/organisms/messages/chat-message';
import type { MessageReplyToMessage } from '@module-chat/domain/interfaces/message.interface';

export interface ChatDocumentMessageProps extends ChatMessageProps {
  filename?: string;
  forwarded?: boolean;
  forwardedManyTimes?: boolean;
  mediaId: string;
  mimeType?: string;
  replyToMessage?: MessageReplyToMessage | null;
}
