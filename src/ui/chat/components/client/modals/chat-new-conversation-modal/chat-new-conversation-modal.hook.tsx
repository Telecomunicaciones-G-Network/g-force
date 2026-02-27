'use client';

import { useState } from 'react';

export const useChatNewConversationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWhatsappModalOpen, setIsWhatsappModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const onOpenChange = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) setSearchValue('');
  };

  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSelectWhatsappPlatform = () => {
    setIsModalOpen(false);
    setIsWhatsappModalOpen(true);
  };

  const onWhatsappModalOpenChange = (open: boolean) => {
    setIsWhatsappModalOpen(open);
    if (!open) setSearchValue('');
  };

  return {
    isModalOpen,
    isWhatsappModalOpen,
    onOpenChange,
    onSearchChange,
    onSelectWhatsappPlatform,
    onWhatsappModalOpenChange,
    searchValue,
  };
};
