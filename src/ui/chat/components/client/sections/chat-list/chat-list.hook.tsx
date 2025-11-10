import { useMediaQuery } from '@/src/packages/hookers/use-media-query.hook';
import { useChatStore } from '@ui-chat/stores/chat.store';

export const useChatList = () => {
  const isDesktop = useMediaQuery('(width >= 1024px)');
  const chatMode = useChatStore((state) => state.chatMode);

  return { chatMode, isDesktop };
};
