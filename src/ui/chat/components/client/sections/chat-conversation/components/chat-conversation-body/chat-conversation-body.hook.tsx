'use client';

import type { OnIncommingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { useScrollToBottom } from '@hookers/use-scroll-to-bottom.hook';
import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';
import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { EmitMarkMessageAsReadMapper } from '@module-chat/infrastructure/mappers/emit-mark-message-as-read.mapper';
import { OnIncommingMessageMapper } from '@module-chat/infrastructure/mappers/on-incomming-message.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface UseChatConversationBodyProps {
  disabledChat?: boolean;
}

export const useChatConversationBody = ({
  disabledChat = false,
}: Readonly<UseChatConversationBodyProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);
  const messages = useChatStore((state) => state.messages);

  const addMessage = useChatStore((state) => state.addMessage);

  const { ref: messagesContainerRef } = useScrollToBottom<HTMLDivElement>({
    autoScroll: true,
    dependencies: [messages],
    behavior: 'smooth',
  });
  const { emitWithAck } = useSocket();

  const markMessageAsRead = useCallback(
    async (messageId: string) => {
      try {
        const request = EmitMarkMessageAsReadMapper.mapTo({ messageId });

        await emitWithAck?.(
          socketEmissionsDictionary.MARK_MESSAGE_AS_READ,
          request,
        );
      } catch (_error) {
        return;
      }
    },
    [emitWithAck],
  );

  onSocketEvent<OnIncommingMessageResponseDTO>(
    socketEventsDictionary.INCOMING_MESSAGE,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const newMessage = OnIncommingMessageMapper.mapFrom(
        parseResponse,
        activeContact,
      );

      if (!newMessage) return;

      if (newMessage) addMessage(newMessage);

      if (newMessage && !disabledChat) markMessageAsRead(newMessage?.id);
    },
    [activeContact?.id, addMessage],
  );

  return {
    messagesContainerRef,
    messages,
  };
};
