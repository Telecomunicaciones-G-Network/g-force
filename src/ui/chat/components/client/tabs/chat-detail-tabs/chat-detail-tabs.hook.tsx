import { useState } from 'react';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatDetailTabs = (
  defaultValue: 'contact' | 'invoices' | 'contracts' | 'status' | 'historical',
) => {
  const [activeTab, setActiveTab] = useState<
    'contact' | 'invoices' | 'contracts' | 'status' | 'historical'
  >(defaultValue || 'contact');

  const setChatMode = useChatStore((state) => state.setChatMode);

  const changeActiveTab = (tab: string) => {
    if (
      tab === 'contact' ||
      tab === 'invoices' ||
      tab === 'contracts' ||
      tab === 'status' ||
      tab === 'historical'
    ) {
      setActiveTab(tab);
    }
  };

  const goBackChat = () => setChatMode(ChatModes.CHAT);

  console.log(activeTab);

  return {
    activeTab,
    changeActiveTab,
    goBackChat,
  };
};
