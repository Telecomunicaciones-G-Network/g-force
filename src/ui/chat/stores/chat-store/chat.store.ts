'use client';

import type { FileData } from '@gnetwork-ui/components/molecules/inputs/file-input';
import type { MessageValues } from '@module-chat/domain/interfaces';
import type { MessageStatus } from '@module-chat/domain/types';
import type { ChatSendMode } from '@ui-chat/types';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

import { sortArrayByObjectProperty } from '@objecter/utils/sort-array-by-object-property.util';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

export const useChatStore = create<ChatStoreState>((set, get) => ({
  file: null,
  messages: [],
  sendMode: ChatSendModes.TEXT,
  setFile: (file: FileData | null) => set({ file }),
  setMessages: (messages: MessageValues[]) => {
    const sortedMessages = sortArrayByObjectProperty({
      data: messages as (MessageValues & Record<string, unknown>)[],
      order: 'asc',
      property: 'createdAt',
    });

    set({ messages: sortedMessages as MessageValues[] });
  },
  setSendMode: (sendMode: ChatSendMode) => set({ sendMode }),
  addMessage: (message: MessageValues) => {
    if (!message) {
      return;
    }

    const { messages } = get();
    const messageExists = messages.some((msg) => msg.id === message.id);

    if (!messageExists) {
      set({ messages: [...messages, message] });
    }
  },
  deleteOneMessageById: (messageId: string) => {
    const { messages } = get();

    set({ messages: messages?.filter((message) => message.id !== messageId) });
  },
  updateOneMessageStatusById: (
    messageId: string,
    messageStatus: MessageStatus,
  ) => {
    if (!messageId || !messageStatus) {
      return;
    }

    const { messages } = get();

    const newMessages = messages?.map((message) => {
      if (messageId === message?.id) {
        return {
          ...message,
          status: messageStatus,
        };
      }

      return message;
    });

    set({ messages: newMessages });
  },
}));
