import type { ChatStoreState } from "./chat-store.props";

import { create } from "zustand";

export const useChatStore = create<ChatStoreState>((set) => ({
  activeChat: 0,

  setActiveChat: (chatId: number) => set({ activeChat: chatId }),
}));
