import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatListBody = () => {
  const activeChat = useChatStore((state) => state.activeChat);

  const setActiveChat = useChatStore((state) => state.setActiveChat);
  const setChatMode = useChatStore((state) => state.setChatMode);

  const setChat = (chatId: string) => {
    setActiveChat(chatId);
    setChatMode(ChatModes.CHAT);
  };

  return { activeChat, changeActiveChat: setChat };
};
