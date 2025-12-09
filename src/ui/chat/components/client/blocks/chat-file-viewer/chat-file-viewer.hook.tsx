'use client';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatFileViewer = () => {
  const setFile = useChatStore((state) => state.setFile);
  const setSendMode = useChatStore((state) => state.setSendMode);

  const closeFileViewer = () => {
    setSendMode(ChatSendModes.TEXT);
    setFile(null);
  };

  return {
    closeFileViewer,
  };
};
