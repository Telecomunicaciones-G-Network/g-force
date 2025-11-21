// DONE:

'use client';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';
import { useMediaQuery } from '@hookers/use-media-query.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

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
