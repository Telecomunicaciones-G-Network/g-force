import type {
  Agent,
  Contact,
  Conversation,
} from '@module-chat/domain/interfaces';
import type {
  AssignedToScope,
  ContactPlatform,
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';
import type { AgentStatus } from '@module-chat/domain/enums/agent-status.enum';
import type { ChatMode } from '@ui-chat/types';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

/**
 * @name ContactFilters
 *
 * @description Filters for the contact list. These map directly to API query parameters.
 *
 * @property platform - Filter by contact platform (e.g., WHATSAPP)
 * @property status - Filter by conversation status (WAITING, ASSIGNED, FINISHED)
 * @property assignedTo - Assignment scope (my_teams, me, bot)
 * @property teamCodename - Filter by specific team codename
 */
export interface ContactFilters {
  platform: ContactPlatform | null;
  status: ConversationStatus | null;
  assignedTo: AssignedToScope | null;
  teamCodename: TeamCodename | null;
}

export interface ContactStoreState {
  activeAgent: Omit<Agent, 'email' | 'isBot'> | null;
  activeContact: Contact | null;
  chatMode: ChatMode;
  contacts: Contact[];
  contactFilters: ContactFilters;

  setActiveAgent: (agent: Omit<Agent, 'email' | 'isBot'> | null) => void;
  setActiveContact: (contact: Contact | null) => void;
  setChatMode: (mode: ChatMode) => void;
  setContacts: (contacts: Contact[]) => void;
  setContactFilters: (filters: Partial<ContactFilters>) => void;
  clearContactFilters: () => void;
  updateActiveAgentStatus: (status: AgentStatus) => void;

  addContacts: (contacts: Contact[]) => void;
  addOneUnreadMessageToContact: (
    params: AddOneUnreadMessageToContactParams,
  ) => void;
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
