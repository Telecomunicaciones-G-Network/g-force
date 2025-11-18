import type { ChatMode } from '@ui-chat/types';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

export const useChatStore = create<ChatStoreState>((set) => ({
  activeChat: null,
  chatMode: ChatModes.LIST,

  setActiveChat: (chatId: string | null) => set({ activeChat: chatId }),
  setChatMode: (mode: ChatMode) => set({ chatMode: mode }),
}));
