// DONE:

'use client';

import type { MessageValues } from '@module-chat/domain/interfaces';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

export const useChatStore = create<ChatStoreState>((set) => ({
  messages: [],
  setMessages: (messages: MessageValues[]) => set({ messages }),
}));
