'use client';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatConversationHeader = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT);

  const goBackChatList = () => {
    setChatMode(ChatModes.LIST);
    setActiveContact(null);
  };

  const goToChatDetails = () =>
    useContactStore.setState({ chatMode: ChatModes.DETAILS });

  return {
    activeContact,
    goBackChatList,
    goToChatDetails,
    isDesktop,
  };
};
