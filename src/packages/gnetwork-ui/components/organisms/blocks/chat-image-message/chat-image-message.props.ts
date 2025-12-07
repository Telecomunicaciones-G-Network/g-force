import type { ReactChild } from '../../../../types';
import type { ChatMessageProps } from '../chat-message';

export interface ChatImageMessageProps extends ChatMessageProps {
  customImageComponent?: ReactChild;
  filename?: string;
  imageAlt?: string;
  imageUrl?: string;
  mimeType?: string;
}
