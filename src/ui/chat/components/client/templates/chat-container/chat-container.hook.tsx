'use client';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

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

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT, {
    defaultValue: false,
    initializeWithValue: false,
  });

  return {
    activeContact,
    chatMode,
    isDesktop,
  };
};
