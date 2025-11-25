// DONE:

import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';

export interface ContactStoreState {
  activeContact: ContactValues | null;
  chatMode: ChatMode;
  contacts: ContactValues[];

  existContactOnStore: (contactId: string) => boolean;
  setActiveContact: (contact: ContactValues | null) => void;
  setChatMode: (mode: ChatMode) => void;
  setContacts: (contacts: ContactValues[]) => void;
}
