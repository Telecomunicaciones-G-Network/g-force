'use client';

import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';

export const useChatTransferConversationModal = () => {
  const { isModalOpen, onOpenChange } = useModal();

  return {
    isModalOpen,
    onOpenChange,
  };
};
