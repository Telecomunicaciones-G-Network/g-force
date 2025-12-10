import type {
  AgentValues,
  ContactValues,
} from '@module-chat/domain/interfaces';
import type { ChatMode } from '@ui-chat/types';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

export interface ContactStoreState {
  activeAgent: AgentValues | null;
  activeContact: ContactValues | null;
  chatMode: ChatMode;
  contacts: ContactValues[];

  setActiveAgent: (agent: AgentValues | null) => void;
  setActiveContact: (contact: ContactValues | null) => void;
  setChatMode: (mode: ChatMode) => void;
  setContacts: (contacts: ContactValues[]) => void;

  addOneUnreadMessageToContact: (
    params: AddOneUnreadMessageToContactParams,
  ) => void;
  changeConversationAssignedToContact: (contactId: string) => void;
  changeConversationAgent: (contactId: string) => void;
  clearUnreadMessagesFromOneContact: (contactId: string) => void;
  deleteOneContactById: (contactId: string) => void;
  existContactOnStore: (contactId: string) => boolean;
  hasContactConversationAssigned: (contactId: string) => boolean;
  sortContactsByLatestMessage: () => void;
}
