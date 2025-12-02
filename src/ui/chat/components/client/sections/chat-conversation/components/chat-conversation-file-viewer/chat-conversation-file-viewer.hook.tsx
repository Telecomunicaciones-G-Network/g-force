'use client';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationFileViewer = () => {
  const file = useChatStore((state) => state.file);

  const setFile = useChatStore((state) => state.setFile);
  const setSendMode = useChatStore((state) => state.setSendMode);

  const removeFile = () => {
    setFile(null);
    setSendMode(ChatSendModes.TEXT);
  };

  const downloadFile = () => {
    if (!file) return;

    const url = URL.createObjectURL(file.file);
    const link = document.createElement('a');

    link.href = url;
    link.download = file.name;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return { downloadFile, file, removeFile };
};
