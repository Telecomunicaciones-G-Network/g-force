// DONE:

import type { MessageValues } from '@module-chat/domain/interfaces';

export interface ChatStoreState {
  messages: MessageValues[];

  setMessages: (messages: MessageValues[]) => void;
}
