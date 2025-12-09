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

  const attachImageFiles = (fileData: FileData[]) => {
    console.log(fileData?.[0]);
    setIsDropdownOpen(false);
    setFile(fileData?.[0] ?? null);
    setSendMode(ChatSendModes.IMAGE);
  };

  return {
    attachImageFiles,
    isDropdownOpen,
    isSocketConnected: isConnectedAndStatusConnected,
    onOpenChange: setIsDropdownOpen,
    setIsDropdownOpen,
    sendMode,
  };
};
