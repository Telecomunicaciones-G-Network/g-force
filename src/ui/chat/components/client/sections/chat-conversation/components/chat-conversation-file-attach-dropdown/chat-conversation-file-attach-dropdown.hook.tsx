'use client';

import { useState } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import type { FileData } from '@gnetwork-ui/components/molecules/inputs/file-input';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

export const useChatConversationFileAttachDropdown = () => {
  const { isConnectedAndStatusConnected } = useSocket();

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const sendMode = useChatStore((state) => state.sendMode);

  const setFile = useChatStore((state) => state.setFile);
  const setSendMode = useChatStore((state) => state.setSendMode);

  const attachFiles = (fileData: FileData[]) => {
    setFile(fileData?.[0] ?? null);
    setSendMode(ChatSendModes.IMAGE);
    setIsDropdownOpen(false);
  };

  return {
    attachFiles,
    isDropdownOpen,
    isSocketConnected: isConnectedAndStatusConnected,
    onOpenChange: setIsDropdownOpen,
    sendMode,
  };
};
