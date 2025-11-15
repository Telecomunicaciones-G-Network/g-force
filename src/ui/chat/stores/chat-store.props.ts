import type { ChatMode } from '@ui-chat/types';

export interface ChatStoreState {
  activeChat: number | null;
  chatMode: ChatMode;
  setActiveChat: (chatId: number | null) => void;
  setChatMode: (mode: ChatMode) => void;
}
