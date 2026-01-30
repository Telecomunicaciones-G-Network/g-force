'use client';

import { useState } from 'react';

import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { closeChatConversationAction } from '@ui-chat/actions/close-chat-conversation.action';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatCloseConversationModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { isModalOpen, onOpenChange } = useModal();

  const activeAgent = useContactStore((state) => state.activeAgent);
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  const { isConnectedAndStatusConnected } = useSocket();

  const onCloseConversation = async () => {
    setIsLoading(true);

    const response = await closeChatConversationAction(activeContact?.id);

    if (response?.success) {
      setActiveContact(null);
      setChatMode(ChatModes.LIST);
      deleteOneContactById(activeContact?.id ?? '');
      onOpenChange(false);
    }

    setIsLoading(false);
  };

  const disabledSocketActions =
    !isConnectedAndStatusConnected ||
    isLoading ||
    activeAgent?.id !== activeContact?.latestConversation?.agent?.id;

  return {
    activeContact,
    disabledSocketActions,
    isLoading,
    isModalOpen,
    onCloseConversation,
    onOpenChange,
  };
};
