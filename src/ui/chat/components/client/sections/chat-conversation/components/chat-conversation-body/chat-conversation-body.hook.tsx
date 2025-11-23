'use client';

import type { OnIncommingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnIncommingMessageMapper } from '@module-chat/infrastructure/mappers/on-incomming-message.mapper';

import { useMarkMessageAsRead } from '@ui-chat/hooks/useMarkMessageAsRead.hook';

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

  const { markMessageAsRead } = useMarkMessageAsRead();

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
    messages,
  };
};
