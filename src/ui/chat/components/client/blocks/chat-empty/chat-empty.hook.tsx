// DONE:

'use client';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatEmpty = () => {
  const activeContact = useChatStore((state) => state.activeContact);

  return { activeContact };
};
