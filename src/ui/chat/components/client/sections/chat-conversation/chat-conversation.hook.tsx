import { useMediaQuery } from '@hookers/use-media-query.hook';
import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatConversation = () => {
  const activeChat = useChatStore((state) => state.activeChat);
  const chatMode = useChatStore((state) => state.chatMode);
  const isDesktop = useMediaQuery('(width >= 1024px)', {
    defaultValue: false,
    initializeWithValue: false,
  });

  return {
    activeChat,
    chatMode,
    isDesktop,
  };
};
