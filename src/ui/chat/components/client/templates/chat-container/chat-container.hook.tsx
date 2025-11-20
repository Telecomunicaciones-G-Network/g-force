// DONE:

'use client';

import { useMediaQuery } from '@hookers/use-media-query.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatContainer = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const chatMode = useContactStore((state) => state.chatMode);

  const isDesktop = useMediaQuery('(width >= 1024px)', {
    defaultValue: false,
    initializeWithValue: false,
  });

  return {
    activeContact,
    chatMode,
    isDesktop,
  };
};
