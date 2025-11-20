// DONE:

'use client';

import { useMediaQuery } from '@hookers/use-media-query.hook';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatContainer = () => {
  const activeContact = useChatStore((state) => state.activeContact);
  const chatMode = useChatStore((state) => state.chatMode);

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
