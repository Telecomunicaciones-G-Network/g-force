'use client';

import type { FileData } from '@gnetwork-ui/components/molecules/inputs/file-input';
import type { Message } from '@module-chat/domain/interfaces';
import type {
  MediaStorageStatus,
  MessageStatus,
} from '@module-chat/domain/types';
import type { ChatSendMode } from '@ui-chat/types';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

import { sortArrayByObjectProperty } from '@objecter/utils/sort-array-by-object-property.util';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

export const useChatStore = create<ChatStoreState>((set, get) => ({
  file: null,
  messages: [],
  messagesNextPage: null,
  sendMode: ChatSendModes.TEXT,
  setFile: (file: FileData | null) => set({ file }),
  setMessages: (messages: Message[]) => {
    const sortedMessages = sortArrayByObjectProperty({
      data: messages as (Message & Record<string, unknown>)[],
      order: 'asc',
      property: 'createdAt',
    });

    set({ messages: sortedMessages as Message[] });
  },
  setSendMode: (sendMode: ChatSendMode) => set({ sendMode }),
  addMessage: (message: Message) => {
    if (!message) {
      return;
    }

    const { messages } = get();
    const messageExists = messages.some((msg) => msg.id === message.id);

    if (!messageExists) {
      set({ messages: [...messages, message] });
    }
  },
  addMessages: (newMessages: Message[]) => {
    if (!newMessages || newMessages.length === 0) {
      return;
    }

    const { messages } = get();
    const existingIds = new Set(messages.map((msg) => msg.id));
    const uniqueNewMessages = newMessages.filter(
      (msg) => !existingIds.has(msg.id),
    );

    if (uniqueNewMessages.length > 0) {
      const combinedMessages = [...messages, ...uniqueNewMessages];
      const sortedMessages = sortArrayByObjectProperty({
        data: combinedMessages as (Message & Record<string, unknown>)[],
        order: 'asc',
        property: 'createdAt',
      });

      set({ messages: sortedMessages as Message[] });
    }
  },
  changeMessagesPagination: (pagination: {
    hasMore: boolean;
    nextCursor: string | null;
  }) => {
    set({ messagesNextPage: pagination.nextCursor });
  },
  deleteOneMessageById: (messageId: string) => {
    const { messages } = get();

    set({ messages: messages?.filter((message) => message.id !== messageId) });
  },
  updateOneMessageId: (temporalMessageId: string, messageId: string) => {
    const { messages } = get();

    set({
      messages: messages?.map((message) =>
        message.id === temporalMessageId
          ? { ...message, id: messageId }
          : message,
      ),
    });
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
  updateStorageStatusOfOneMessageById: (
    messageId: string,
    storageStatus: MediaStorageStatus,
  ) => {
    const { messages } = get();

    set({
      messages: messages?.map((message) => {
        if (messageId === message?.id && message?.media) {
          return {
            ...message,
            media: {
              ...message.media,
              storageStatus,
            },
          };
        }

        return message;
      }),
    });
  },
}));
