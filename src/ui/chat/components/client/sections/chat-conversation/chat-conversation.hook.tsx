// PENDING:

'use client';

import { useMediaQuery } from '@hookers/use-media-query.hook';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatConversation = () => {
  const activeContact = useChatStore((state) => state.activeContact);
  const chatMode = useChatStore((state) => state.chatMode);

  const isDesktop = useMediaQuery('(width >= 1024px)', {
    defaultValue: false,
    initializeWithValue: false,
  });

  const setActiveContact = useChatStore((state) => state.setActiveContact);
  const setChatMode = useChatStore((state) => state.setChatMode);

  const goBackChatList = () => {
    setChatMode(ChatModes.LIST);
    setActiveContact(null);
  };

  const goToChatDetails = () =>
    useChatStore.setState({ chatMode: ChatModes.DETAILS });

  return {
    activeContact,
    chatMode,
    goBackChatList,
    goToChatDetails,
    isDesktop,
  };
};
