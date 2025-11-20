// PENDING:

import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';

export interface ChatStoreState {
  activeContact: ContactValues | null;
  chatMode: ChatMode;
  setActiveContact: (contact: ContactValues | null) => void;
  setChatMode: (mode: ChatMode) => void;
}
