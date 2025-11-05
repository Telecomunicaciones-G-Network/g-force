import { useChatStore } from "@ui-chat/stores/chat.store";

/**
 * Hook to get the active chat.
 *
 */
export const useChatListBody = () => {
  const activeChat = useChatStore((state) => state.activeChat);

  const setActiveChat = useChatStore((state) => state.setActiveChat);

  return { activeChat, changeActiveChat: setActiveChat };
};
