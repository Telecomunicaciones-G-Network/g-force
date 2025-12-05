import type { ContactValues } from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

export interface ContactStoreState {
  activeContact: ContactValues | null;
  chatMode: ChatMode;
  contacts: ContactValues[];

  setActiveContact: (contact: ContactValues | null) => void;
  setChatMode: (mode: ChatMode) => void;
  setContacts: (contacts: ContactValues[]) => void;

  addOneUnreadMessageToContact: (
    params: AddOneUnreadMessageToContactParams,
  ) => void;
  clearUnreadMessagesFromOneContact: (contactId: string) => void;
  existContactOnStore: (contactId: string) => boolean;
  sortContactsByLatestMessage: () => void;
}
