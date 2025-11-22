import type { MessageValues } from '@module-chat/domain/interfaces';

export interface ChatStoreState {
  messages: MessageValues[];

  addMessage: (message: MessageValues) => void;
  setMessages: (messages: MessageValues[]) => void;
}
