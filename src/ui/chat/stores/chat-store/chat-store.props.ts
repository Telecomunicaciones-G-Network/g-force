import type { MessageValues } from '@module-chat/domain/interfaces';
import type { MessageStatus } from '@module-chat/domain/types';

export interface ChatStoreState {
  messages: MessageValues[];

  addMessage: (message: MessageValues) => void;
  deleteOneMessageById: (messageId: string) => void;
  setMessages: (messages: MessageValues[]) => void;
  updateOneMessageStatusById: (
    messageId: string,
    messageStatus: MessageStatus,
  ) => void;
}
