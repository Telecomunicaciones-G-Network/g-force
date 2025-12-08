'use client';

import { useState } from 'react';

import { closeChatConversationAction } from '@ui-chat/actions/close-chat-conversation.action';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatDetailsContactCloseConversationButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  const onClick = async (contactId?: string) => {
    setIsLoading(true);

    const response = await closeChatConversationAction(contactId);

    if (response?.success) {
      setActiveContact(null);
      setChatMode(ChatModes.LIST);
      deleteOneContactById(contactId ?? '');
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    onClick,
  };
};
