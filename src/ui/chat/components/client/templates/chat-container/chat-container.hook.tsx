'use client';

import type {
  ConversationStatus,
  TeamCodename,
} from '@module-chat/domain/types';

import { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { ContactAssignments } from '@module-chat/domain/enums/contact-assignments.enum';
import { ConversationStatus as ConversationStatusValues } from '@module-chat/domain/enums/conversation-status.enum';
import { TeamCodenames } from '@module-chat/domain/enums/team-codenames.enum';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

const VALID_ASSIGNED_TO = Object.values(ContactAssignments);
const VALID_CONVERSATION_STATUS = Object.values(ConversationStatusValues);
const VALID_TEAM_CODENAMES = Object.values(TeamCodenames);

/**
 * @function useChatContainer
 *
 * @description This hook is used to get the chat container state.
 *
 * @returns activeContact - The active contact.
 * @returns chatMode - The chat mode.
 * @returns isDesktop - Whether the screen is desktop.
 */
export const useChatContainer = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const chatMode = useContactStore((state) => state.chatMode);

  const searchParams = useSearchParams();
  const assignedToSearchParam = searchParams.get('assigned_to');
  const statusSearchParam = searchParams.get('status');
  const teamCodenameSearchParam = searchParams.get('team_codename');

  const { setContactAssignment } = useContactStore();
  const { setConversationStatus } = useContactStore();
  const { setTeam } = useContactStore();

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT, {
    defaultValue: false,
    initializeWithValue: false,
  });

  useEffect(() => {
    if (!statusSearchParam) return;

    if (
      VALID_CONVERSATION_STATUS.includes(
        statusSearchParam as ConversationStatusValues,
      )
    )
      setConversationStatus(statusSearchParam as ConversationStatus);
  }, [statusSearchParam, setConversationStatus]);

  useEffect(() => {
    if (!assignedToSearchParam) return;

    if (
      VALID_ASSIGNED_TO.includes(assignedToSearchParam as ContactAssignments)
    ) {
      setContactAssignment(assignedToSearchParam as ContactAssignments);
    }
  }, [assignedToSearchParam, setContactAssignment]);

  useEffect(() => {
    if (!teamCodenameSearchParam) return;

    if (
      VALID_TEAM_CODENAMES.includes(teamCodenameSearchParam as TeamCodenames)
    ) {
      setTeam(teamCodenameSearchParam as TeamCodename);
    }
  }, [setTeam, teamCodenameSearchParam]);

  return {
    activeContact,
    chatMode,
    isDesktop,
  };
};
