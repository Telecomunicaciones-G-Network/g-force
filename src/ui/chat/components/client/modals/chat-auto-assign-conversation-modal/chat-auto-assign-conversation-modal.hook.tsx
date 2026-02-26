'use client';

import { useState } from 'react';

import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { selfAssignChatConversationAction } from '@ui-chat/actions/self-assign-chat-conversation.action';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useChatAutoAssignConversationModal
 *
 * @description This hook manages the state and behavior for the modal that auto-assigns a chat conversation.
 */
export const useChatAutoAssignConversationModal = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const activeContact = useContactStore((state) => state.activeContact);
  const activeAgent = useContactStore((state) => state.activeAgent);

  const { isModalOpen, onOpenChange } = useModal();
  const { isConnectedAndStatusConnected } = useSocket();

  // If the conversation is already assigned to the current agent, disable action
  const isDisabled =
    !isConnectedAndStatusConnected ||
    isLoading ||
    activeContact?.latestConversation?.agent?.id === activeAgent?.id;

  const closeModal = () => onOpenChange(false);

  const { showToast } = useToast();

  const onSelfAssignConversation = async () => {
    setIsLoading(true);

    const response = await selfAssignChatConversationAction(activeContact?.id);

    if (response?.success) {
      showToast('Conversación asignada correctamente', {
        id: 'chat-auto-assign-success-toast',
        position: 'top-right',
      });
      onOpenChange(false);
    } else {
      showToast(response?.message || 'Error al auto-asignar la conversación', {
        id: 'chat-auto-assign-error-toast',
        position: 'top-right',
      });
    }

    setIsLoading(false);
  };

  return {
    closeModal,
    isDisabled,
    isLoading,
    isModalOpen,
    onSelfAssignConversation,
    onOpenChange,
  };
};
