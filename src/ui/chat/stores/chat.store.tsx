import type { ChatStore } from "./chat-store.props";

import { create } from "zustand";

/**
 * Chat store.
 *
 * Provides global state management for chat-related data.
 *
 * @returns {object} Store with the following properties and methods:
 *   - {number} activeChat - The currently active chat ID.
 *   - {function} setActiveChat(chatId: number): void - Function to set the active chat by its ID.
 */
export const useChatStore = create<ChatStore>((set) => ({
  activeChat: 0,

  setActiveChat: (chatId: number) => set({ activeChat: chatId }),
}));
