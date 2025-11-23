'use client';

import type { MessageValues } from '@module-chat/domain/interfaces';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

import { sortArrayByObjectProperty } from '@objecter/utils/sort-array-by-object-property.util';

export const useChatStore = create<ChatStoreState>((set, get) => ({
  messages: [],
  setMessages: (messages: MessageValues[]) => {
    const sortedMessages = sortArrayByObjectProperty({
      data: messages as (MessageValues & Record<string, unknown>)[],
      order: 'asc',
      property: 'createdAt',
    });

    set({ messages: sortedMessages as MessageValues[] });
  },
  addMessage: (message: MessageValues) => {
    const { messages } = get();
    const messageExists = messages.some((msg) => msg.id === message.id);

    if (!messageExists) {
      set({ messages: [...messages, message] });
    }
  },
  deleteOneMessageById: (messageId: string) => {
    const { messages } = get();

    set({ messages: messages.filter((message) => message.id !== messageId) });
  },
}));
