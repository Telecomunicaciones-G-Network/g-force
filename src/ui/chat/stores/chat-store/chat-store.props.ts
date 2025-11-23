import type { MessageValues } from '@module-chat/domain/interfaces';

export interface ChatStoreState {
  messages: MessageValues[];

  addMessage: (message: MessageValues) => void;
  deleteOneMessageById: (messageId: string) => void;
  setMessages: (messages: MessageValues[]) => void;
}
