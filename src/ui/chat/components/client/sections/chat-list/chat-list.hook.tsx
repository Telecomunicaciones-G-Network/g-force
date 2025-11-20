import { useMediaQuery } from '@hookers/use-media-query.hook';

import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatList = () => {
  const isDesktop = useMediaQuery('(width >= 1024px)');
  const chatMode = useChatStore((state) => state.chatMode);
  const activeContact = useChatStore((state) => state.activeContact);

  console.log('activeContact', activeContact);

  return { chatMode, isDesktop };
};
