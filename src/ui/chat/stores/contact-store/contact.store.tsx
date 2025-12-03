'use client';

import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';
import type { ContactStoreState } from './contact-store.props';

import { create } from 'zustand';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

export const useContactStore = create<ContactStoreState>((set, get) => ({
  activeContact: null,
  chatMode: ChatModes.LIST,
  contacts: [],
  setActiveContact: (contact: ContactValues | null) =>
    set({ activeContact: contact }),
  setChatMode: (mode: ChatMode) => set({ chatMode: mode }),
  setContacts: (contacts: ContactValues[]) => set({ contacts }),
  clearUnreadMessagesFromOneContact: (contactId: string) => {
    const { contacts } = get();

    set({
      contacts: contacts?.map((contact) =>
        contact?.id === contactId ? { ...contact, unreadCount: 0 } : contact,
      ),
    });
  },
  existContactOnStore: (contactId: string): boolean => {
    const { contacts } = get();

    return contacts?.some(
      (contact: ContactValues) => contact?.id === contactId,
    );
  },
}));
