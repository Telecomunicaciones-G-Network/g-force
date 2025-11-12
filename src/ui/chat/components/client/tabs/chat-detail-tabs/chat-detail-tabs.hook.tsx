import type { ChatDetailTab } from './interfaces';

import { useState } from 'react';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

import { ChatDetailTabs } from './enums/chat-detail-tabs.enum';

export const useChatDetailTabs = (defaultValue: ChatDetailTab) => {
  const [activeTab, setActiveTab] = useState<ChatDetailTab>(
    defaultValue || ChatDetailTabs.CONTACT,
  );

  const setChatMode = useChatStore((state) => state.setChatMode);

  const changeActiveTab = (tab: string) => setActiveTab(tab as ChatDetailTab);

  const goBackChat = () => setChatMode(ChatModes.CHAT);

  return {
    activeTab,
    changeActiveTab,
    goBackChat,
  };
};
