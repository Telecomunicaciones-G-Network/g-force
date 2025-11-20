// DONE:

'use client';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatEmpty = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  return { activeContact };
};
