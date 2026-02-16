'use client';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatContactAvatar = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  return {
    activeContact,
  };
};
