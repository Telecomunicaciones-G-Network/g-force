import { useMediaQuery } from '@hookers/use-media-query.hook';

import { ChatModes } from '@ui-chat/enums/chat-modes.enum';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatConversation = () => {
  const activeChat = useChatStore((state) => state.activeChat);
  const chatMode = useChatStore((state) => state.chatMode);

  const isDesktop = useMediaQuery('(width >= 1024px)', {
    defaultValue: false,
    initializeWithValue: false,
  });

  const setActiveChat = useChatStore((state) => state.setActiveChat);
  const setChatMode = useChatStore((state) => state.setChatMode);

  const goBackChatList = () => {
    setChatMode(ChatModes.LIST);
    setActiveChat(null);
  };

  const goToChatDetails = () =>
    useChatStore.setState({ chatMode: ChatModes.DETAILS });

  return {
    activeChat,
    chatMode,
    goBackChatList,
    goToChatDetails,
    isDesktop,
  };
};
