'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';
import type { ContactStoreState } from './contact-store.props';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

import { create } from 'zustand';

import { ConversationStatus } from '@module-chat/domain/enums/conversation-status.enum';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

export const useContactStore = create<ContactStoreState>((set, get) => ({
  activeContact: null,
  chatMode: ChatModes.LIST,
  contacts: [],
  setActiveContact: (contact: ContactValues | null) =>
    set({ activeContact: contact }),
  setChatMode: (mode: ChatMode) => set({ chatMode: mode }),
  setContacts: (contacts: ContactValues[]) => set({ contacts }),
  addOneUnreadMessageToContact: ({
    contactId,
    lastMessage,
    activeContact,
  }: AddOneUnreadMessageToContactParams) => {
    const { contacts } = get();

    set({
      contacts: contacts?.map((contact) =>
        contact?.id === contactId
          ? {
              ...contact,
              latestMessage: {
                ...contact?.latestMessage,
                createdAt: new Date().toISOString().replace('Z', '000Z'),
                text: lastMessage,
              },
              unreadCount:
                activeContact?.id === contactId ? 0 : contact?.unreadCount + 1,
            }
          : contact,
      ),
    });
  },
  changeConversationAssignedToContact: (contactId: string) => {
    const { contacts } = get();

    set({
      contacts: contacts?.map((contact) =>
        contact?.id === contactId
          ? {
              ...contact,
              latestConversation: {
                ...contact?.latestConversation,
                status: ConversationStatus.ASSIGNED,
              },
            }
          : contact,
      ),
    });
  },
  clearUnreadMessagesFromOneContact: (contactId: string) => {
    const { contacts } = get();

    set({
      contacts: contacts?.map((contact) =>
        contact?.id === contactId ? { ...contact, unreadCount: 0 } : contact,
      ),
    });
  },
  deleteOneContactById: (contactId: string) => {
    const { contacts } = get();

    set({
      contacts: contacts?.filter((contact) => contact?.id !== contactId),
    });
  },
  existContactOnStore: (contactId: string): boolean => {
    const { contacts } = get();

    return contacts?.some(
      (contact: ContactValues) => contact?.id === contactId,
    );
  },
  hasContactConversationAssigned: (contactId: string): boolean => {
    const { contacts } = get();

    return contacts?.some(
      (contact: ContactValues) =>
        contact?.id === contactId &&
        contact?.latestConversation?.status === ConversationStatus.ASSIGNED,
    );
  },
  sortContactsByLatestMessage: () => {
    const { contacts } = get();

    const sortedContacts = [...contacts].sort((a, b) => {
      const dateA = a?.latestMessage?.createdAt
        ? new Date(a.latestMessage.createdAt).getTime()
        : 0;
      const dateB = b?.latestMessage?.createdAt
        ? new Date(b.latestMessage.createdAt).getTime()
        : 0;

      return dateB - dateA;
    });

    set({ contacts: sortedContacts });
  },
}));
