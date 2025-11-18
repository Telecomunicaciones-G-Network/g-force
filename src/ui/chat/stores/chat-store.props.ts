import type { ChatMode } from '@ui-chat/types';

export interface ChatStoreState {
  activeChat: string | null;
  chatMode: ChatMode;
  setActiveChat: (chatId: string | null) => void;
  setChatMode: (mode: ChatMode) => void;
}
