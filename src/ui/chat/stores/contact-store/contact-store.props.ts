import type {
  Agent,
  Contact,
  Conversation,
} from '@module-chat/domain/interfaces';
import type { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';
import type { ChatMode } from '@ui-chat/types';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

export interface ContactStoreState {
  activeAgent: Omit<Agent, 'email' | 'isBot'> | null;
  activeContact: Contact | null;
  chatMode: ChatMode;
  contacts: Contact[];
  contactsHasMorePages: boolean;
  contactsNextPage: string | null;

  setActiveAgent: (agent: Omit<Agent, 'email' | 'isBot'> | null) => void;
  setActiveContact: (contact: Contact | null) => void;
  setChatMode: (mode: ChatMode) => void;
  setContacts: (contacts: Contact[]) => void;
  updateActiveAgentStatus: (status: AgentStatus) => void;

  addContacts: (contacts: Contact[]) => void;
  addOneUnreadMessageToContact: (
    params: AddOneUnreadMessageToContactParams,
  ) => void;
  changeContactsPagination: (params: {
    hasMore: boolean;
    nextCursor: string | null;
  }) => void;
  clearUnreadMessagesFromOneContact: (contactId: string) => void;
  deleteOneContactById: (contactId: string) => void;
  existContactOnStore: (contactId: string) => boolean;
  hasContactConversationAssigned: (contactId: string) => boolean;
  sortContactsByLatestMessage: VoidFunction;
  updateContactLatestConversation: (
    contactId: string,
    conversation: Partial<Conversation>,
  ) => void;
}
