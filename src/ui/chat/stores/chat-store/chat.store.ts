'use client';

import type { MessageValues } from '@module-chat/domain/interfaces';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

export const useChatStore = create<ChatStoreState>((set, get) => ({
  messages: [],
  setMessages: (messages: MessageValues[]) => set({ messages }),
  addMessage: (message: MessageValues) => {
    const { messages } = get();
    const messageExists = messages.some((msg) => msg.id === message.id);

    if (!messageExists) {
      set({ messages: [...messages, message] });
    }
  },
}));
