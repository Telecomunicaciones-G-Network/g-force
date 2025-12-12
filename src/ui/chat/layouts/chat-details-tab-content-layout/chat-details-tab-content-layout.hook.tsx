'use client';

import { useMediaQuery } from '@hook/use-media-query.hook';

import { CHAT_DESKTOP_VIEWPORT } from '@ui-chat/constants/chat-desktop-viewport.constant';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatDetailsTabContentLayout = () => {
  const setChatMode = useContactStore((state) => state.setChatMode);

  const isDesktop = useMediaQuery(CHAT_DESKTOP_VIEWPORT);

  const goBackChat = () => setChatMode(ChatModes.CHAT);

  return {
    goBackChat,
    isDesktop,
  };
};
