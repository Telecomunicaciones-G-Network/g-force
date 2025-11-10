import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatEmpty = () => {
  const activeChat = useChatStore((state) => state.activeChat);

  return { activeChat };
};
