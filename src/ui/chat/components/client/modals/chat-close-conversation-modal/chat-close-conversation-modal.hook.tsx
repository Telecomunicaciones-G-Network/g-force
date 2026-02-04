'use client';

import { useState } from 'react';

import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { closeChatConversationAction } from '@ui-chat/actions/close-chat-conversation.action';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useChatCloseConversationModal
 *
 * @description This hook manages the state and behavior for the modal that closes a chat conversation.
 *
 * @returns activeContact - The currently active contact in the chat.
 * @returns closeModal: Function to close the modal.
 * @returns disabledSocketActions: Whether socket-related actions are disabled.
 * @returns isLoading: Indicates if the close conversation action is being processed.
 * @returns isModalOpen: Whether the modal is currently open.
 * @returns onCloseConversation: Function to close the current conversation.
 * @returns onOpenChange: Function to toggle modal open state.
 *
 * // TODO: Try to globalize the disabled socket actions
 */
export const useChatCloseConversationModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeAgent = useContactStore((state) => state.activeAgent);
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const { isModalOpen, onOpenChange } = useModal();
  const { isConnectedAndStatusConnected } = useSocket();

  const disabledSocketActions =
    !isConnectedAndStatusConnected ||
    isLoading ||
    activeAgent?.id !== activeContact?.latestConversation?.agent?.id;

  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  const closeModal = () => onOpenChange(false);

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

  return {
    activeContact,
    closeModal,
    disabledSocketActions,
    isLoading,
    isModalOpen,
    onCloseConversation,
    onOpenChange,
  };
};
