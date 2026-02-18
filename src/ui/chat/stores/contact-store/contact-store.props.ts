import type {
  Agent,
  Contact,
  Conversation,
} from '@module-chat/domain/interfaces';
import type {
  ContactAssignment,
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';
import type { ChatMode } from '@ui-chat/types';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

import { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';

export interface ContactStoreState {
  activeAgent: Omit<Agent, 'email' | 'isBot'> | null;
  activeContact: Contact | null;
  chatMode: ChatMode;
  contactAssignment: ContactAssignment;
  contacts: Contact[];
  contactsHasMorePages: boolean;
  contactsNextPage: string | null;
  conversationStatus: ConversationStatus | null;
  team: TeamCodename | null;

  setActiveAgent: (agent: Omit<Agent, 'email' | 'isBot'> | null) => void;
  setActiveContact: (contact: Contact | null) => void;
  setChatMode: (mode: ChatMode) => void;
  setContactAssignment: (assignment: ContactAssignment) => void;
  setContacts: (contacts: Contact[]) => void;
  setConversationStatus: (status: ConversationStatus | null) => void;
  setTeam: (team: TeamCodename | null) => void;
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
  isContactAssignedToMe: (contactId: string, activeAgentId?: string) => boolean;
  updateContactLatestConversation: (
    contactId: string,
    conversation: Partial<Conversation>,
  ) => void;
}
