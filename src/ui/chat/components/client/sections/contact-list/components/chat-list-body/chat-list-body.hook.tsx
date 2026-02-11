'use client';

import type { Contact } from '@module-chat/domain/interfaces';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatListBody = () => {
  const activeContact = useContactStore((state) => state.activeContact);
  const isPaymentModalOpen = useContactStore(
    (state) => state.isPaymentModalOpen,
  );

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const clearUnreadMessagesFromOneContact = useContactStore(
    (state) => state.clearUnreadMessagesFromOneContact,
  );

  const changeActiveContact = (contact: Contact) => {
    // Bloquear cambio de contacto si el modal de pago está abierto
    if (isPaymentModalOpen) {
      return;
    }

    setActiveContact(contact);
    setChatMode(ChatModes.CHAT);
    clearUnreadMessagesFromOneContact(contact?.id);
  };

  return { activeContact, changeActiveContact };
};
