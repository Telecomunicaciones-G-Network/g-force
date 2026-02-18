'use client';

import type {
  Agent,
  Contact,
  Conversation,
} from '@module-chat/domain/interfaces';
import type {
  AgentStatus,
  ContactAssignment,
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';
import type { ChatMode } from '@ui-chat/types';
import type { ContactStoreState } from './contact-store.props';
import type { AddOneUnreadMessageToContactParams } from '../../interfaces';

import { create } from 'zustand';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';
import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

export const useContactStore = create<ContactStoreState>((set, get) => ({
  activeAgent: null,
  activeContact: null,
  chatMode: ChatModes.LIST,
  contactAssignment: ContactAssignments.MY_TEAMS,
  contacts: [],
  isPaymentModalOpen: false,
  contactsHasMorePages: false,
  contactsNextPage: null,
  conversationStatus: ConversationStatusValues.ASSIGNED,
  team: null,
  setActiveAgent: (agent: Omit<Agent, 'email' | 'isBot'> | null) =>
    set({ activeAgent: agent }),
  setActiveContact: (contact: Contact | null) =>
    set({ activeContact: contact }),
  setChatMode: (mode: ChatMode) => set({ chatMode: mode }),
  setContactAssignment: (assignment: ContactAssignment) =>
    set({ contactAssignment: assignment }),
  setContacts: (contacts: Contact[]) => set({ contacts }),
  setIsPaymentModalOpen: (isOpen: boolean) =>
    set({ isPaymentModalOpen: isOpen }),
  setConversationStatus: (status: ConversationStatus | null) =>
    set({ conversationStatus: status }),
  setTeam: (team: TeamCodename | null) => set({ team: team }),
  addContacts: (contacts: Contact[]) => {
    const { contacts: currentContacts } = get();

    const newContacts = contacts?.filter(
      (contact) =>
        !currentContacts?.some(
          (currentContact) => currentContact?.id === contact?.id,
        ),
    );

    set({ contacts: [...currentContacts, ...newContacts] });
  },
  addOneUnreadMessageToContact: ({
    contactId,
    lastMessage,
    messageType,
  }: AddOneUnreadMessageToContactParams) => {
    const { activeContact, contacts } = get();

    set({
      contacts: contacts?.map((contact) =>
        contact?.id === contactId
          ? {
              ...contact,
              latestMessage: {
                ...contact?.latestMessage,
                createdAt: new Date().toISOString().replace('Z', '000Z'),
                text: lastMessage,
                type: messageType,
              },
              unreadCount:
                activeContact?.id === contactId ? 0 : contact?.unreadCount + 1,
            }
          : contact,
      ),
    });
  },
  changeContactsPagination: ({ hasMore, nextCursor }) =>
    set({
      contactsHasMorePages: hasMore ?? false,
      contactsNextPage: nextCursor ?? null,
    }),
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

    return contacts?.some((contact: Contact) => contact?.id === contactId);
  },
  hasContactConversationAssigned: (contactId: string): boolean => {
    const { contacts } = get();

    return contacts?.some(
      (contact: Contact) =>
        contact?.id === contactId &&
        contact?.latestConversation?.status ===
          ConversationStatusValues.ASSIGNED,
    );
  },
  isContactAssignedToMe: (
    contactId: string,
    activeAgentId?: string,
  ): boolean => {
    const { contacts } = get();

    return contacts?.some(
      (contact: Contact) =>
        contact?.latestConversation?.agent?.id === activeAgentId &&
        contact?.id === contactId,
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
  updateActiveAgentStatus: (status: AgentStatus) => {
    const { activeAgent } = get();

    if (activeAgent) {
      set({ activeAgent: { ...activeAgent, status } });
    }
  },
  updateContactLatestConversation: (
    contactId: string,
    conversation: Partial<Conversation>,
  ) => {
    const { contacts } = get();

    set({
      contacts: contacts?.map((contact) =>
        contact?.id === contactId
          ? {
              ...contact,
              latestConversation: {
                ...contact?.latestConversation,
                ...conversation,
              },
            }
          : contact,
      ),
    });
  },
}));
