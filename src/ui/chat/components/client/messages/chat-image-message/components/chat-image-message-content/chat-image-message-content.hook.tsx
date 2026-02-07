'use client';

import { useModal } from '@gnetwork-ui/components/organisms/modals/modal/modal.hook';

export const useChatImageMessageContent = () => {
  const { isModalOpen, onOpenChange } = useModal();

  return {
    isModalOpen,
    onOpenChange,
  };
};
