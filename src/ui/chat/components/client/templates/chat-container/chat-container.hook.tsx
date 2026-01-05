'use client';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';
import { useMediaQuery } from '@hook/use-media-query.hook';

import { useOnAgentStatusChanged } from '@ui-chat/hooks/on-agent-status-changed.hook';
import { useOnConnected } from '@ui-chat/hooks/on-connected.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatContainer = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const chatMode = useContactStore((state) => state.chatMode);

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT, {
    defaultValue: false,
    initializeWithValue: false,
  });

  useOnConnected();
  useOnAgentStatusChanged();

  return {
    activeContact,
    chatMode,
    isDesktop,
  };
};
