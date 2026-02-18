'use client';

import type {
  ContactAssignment,
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';

import { useEffect } from 'react';

import { useRouter, useSearchParams } from 'next/navigation';

import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';

import { useDropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown/dropdown.hook';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

const ASSIGNED_TO_QUERY_KEY = 'assigned_to';
const STATUS_QUERY_KEY = 'status';
const TEAM_QUERY_KEY = 'team_codename';

/**
 * @name useContactsFiltersDropdown
 *
 * @description This hook is used to manage the state of the contacts filters dropdown trigger.
 *
 * @returns changePlatformFilter - The function to change the platform filter (updates URL and refetches).
 * @returns isContactsFiltersOpen - The state of the contacts filters dropdown trigger.
 * @returns platformFilter - The current platform filter (from URL).
 * @returns setIsContactsFiltersOpen - The function to set the state of the contacts filters dropdown trigger.
 */
export const useContactsFiltersDropdown = () => {
  const assignment = useContactStore((state) => state.contactAssignment);
  const conversationStatus = useContactStore(
    (state) => state.conversationStatus,
  );
  const teams = useContactStore((state) => state.team);

  const activeContact = useContactStore((state) => state.activeContact);
  const contacts = useContactStore((state) => state.contacts);

  const { setContactAssignment } = useContactStore();
  const { setConversationStatus } = useContactStore();
  const { setTeam } = useContactStore();

  const { isOpen, setIsOpen } = useDropdown();

  const router = useRouter();
  const searchParams = useSearchParams();

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const changeStatusFilter = (status: ConversationStatus | 'ALL') => {
    const next = new URLSearchParams(searchParams);

    if (status === ConversationStatusValues.ASSIGNED) {
      next.delete(STATUS_QUERY_KEY);
    } else {
      next.set(STATUS_QUERY_KEY, status);
    }

    setConversationStatus(status === 'ALL' ? null : status);

    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const changeAssignedToFilter = (assignedTo: ContactAssignment) => {
    const next = new URLSearchParams(searchParams);

    if (assignedTo === ContactAssignments.MY_TEAMS) {
      next.delete(ASSIGNED_TO_QUERY_KEY);
    } else {
      next.set(ASSIGNED_TO_QUERY_KEY, assignedTo);
    }

    setContactAssignment(assignedTo);

    router.replace(`?${next.toString()}`, { scroll: false });
  };

  const changeTeamsFilter = (teams: TeamCodename | 'ALL') => {
    const next = new URLSearchParams(searchParams);

    if (teams === 'ALL') {
      next.delete(TEAM_QUERY_KEY);
    } else {
      next.set(TEAM_QUERY_KEY, teams);
    }

    setTeam(teams === 'ALL' ? null : teams);

    router.replace(`?${next.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (!contacts || contacts.length === 0) return;

    if (!contacts.some((contact) => contact?.id === activeContact?.id)) {
      setActiveContact(null);
      setChatMode(ChatModes.LIST);
    }
  }, [activeContact?.id, contacts, setActiveContact, setChatMode]);

  return {
    assignedToFilter: assignment,
    changeAssignedToFilter,
    changeStatusFilter,
    changeTeamsFilter,
    isContactsFiltersOpen: isOpen,
    setIsContactsFiltersOpen: setIsOpen,
    statusFilter: !conversationStatus ? 'ALL' : conversationStatus,
    teamsFilter: !teams ? 'ALL' : teams,
  };
};
