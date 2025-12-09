'use client';

import type { ChangeEvent, FormEvent } from 'react';

import { useState } from 'react';

import { useDownloadFile } from '@hook/use-download-file.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { ChatSendModes } from '@ui-chat/enums/chat-send-mode.enum';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useChatFileViewerFooter = () => {
  const [message, setMessage] = useState<string>('');

  const file = useChatStore((state) => state.file);
  const activeContact = useContactStore((state) => state.activeContact);

  const setFile = useChatStore((state) => state.setFile);
  const setSendMode = useChatStore((state) => state.setSendMode);

  const { downloadFile: downloadFileProcess } = useDownloadFile();
  const { isConnectedAndStatusConnected } = useSocket();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!activeContact?.id) return;

    console.log('Debo enviar el archivo');
  };

  const changeMessage = (event: ChangeEvent<HTMLInputElement>) =>
    setMessage(event?.target?.value);

  const downloadFile = () => downloadFileProcess(file?.file);

  const removeFile = () => {
    setFile(null);
    setSendMode(ChatSendModes.TEXT);
  };

  return {
    changeMessage,
    downloadFile,
    isSocketConnected: isConnectedAndStatusConnected,
    message,
    onSubmit,
    removeFile,
  };
};
