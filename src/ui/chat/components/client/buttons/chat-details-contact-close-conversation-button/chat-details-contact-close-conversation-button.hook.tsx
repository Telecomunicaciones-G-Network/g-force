'use client';

import { useState } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { closeChatConversationAction } from '@ui-chat/actions/close-chat-conversation.action';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatDetailsContactCloseConversationButton = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeAgent = useContactStore((state) => state.activeAgent);
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  const { isConnectedAndStatusConnected } = useSocket();

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
    activeContact,
    disabledSocketActions:
      !isConnectedAndStatusConnected ||
      isLoading ||
      activeAgent?.id !== activeContact?.latestConversation?.agent?.id,
    isLoading,
    onClick,
  };
};
