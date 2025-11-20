import type { ChatDetailTab } from './interfaces';

import { useState } from 'react';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

import { ChatDetailTabs } from './enums/chat-detail-tabs.enum';

export const useChatDetailTabs = (defaultValue: ChatDetailTab) => {
  const [activeTab, setActiveTab] = useState<ChatDetailTab>(
    defaultValue || ChatDetailTabs.CONTACT,
  );

  const setChatMode = useContactStore((state) => state.setChatMode);

  const changeActiveTab = (tab: string) => setActiveTab(tab as ChatDetailTab);

  const goBackChat = () => setChatMode(ChatModes.CHAT);

  const isActiveTab = (tab: ChatDetailTab) => activeTab === tab;

  return {
    activeTab,
    changeActiveTab,
    goBackChat,
    isActiveTab,
  };
};
