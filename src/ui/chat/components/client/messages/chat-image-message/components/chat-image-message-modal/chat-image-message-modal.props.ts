import type { ChatImageMessageContentProps } from '../chat-image-message-content';

export type ChatImageMessageModalProps = Pick<
  ChatImageMessageContentProps,
  'imageAlt' | 'imageSrc'
>;
