import type { ReactChild } from '../../../../types';
import type { ChatMessageProps } from '../chat-message';

export interface ChatImageMessageProps extends ChatMessageProps {
  customImageComponent?: ReactChild;
  imageAlt?: string;
  imageUrl?: string;
}
