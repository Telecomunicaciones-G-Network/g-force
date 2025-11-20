import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';
import type { ChatStoreState } from './chat-store.props';

import { create } from 'zustand';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

export const useChatStore = create<ChatStoreState>((set) => ({
  activeContact: null,
  chatMode: ChatModes.LIST,
  contacts: [],
  setActiveContact: (contact: ContactValues | null) =>
    set({ activeContact: contact }),
  setChatMode: (mode: ChatMode) => set({ chatMode: mode }),
  setContacts: (contacts: ContactValues[]) => set({ contacts }),
}));
