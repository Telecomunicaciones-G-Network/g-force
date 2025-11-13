import type { ChatComment } from '@ui-chat/interfaces';

export interface ChatCommentCardProps
  extends Pick<ChatComment, 'comment' | 'title'> {
  date?: string;
}
