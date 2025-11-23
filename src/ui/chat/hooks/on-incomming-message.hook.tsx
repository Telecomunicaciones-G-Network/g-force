'use client';

import type { OnIncommingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnIncommingMessageMapper } from '@module-chat/infrastructure/mappers/on-incomming-message.mapper';

import { useEmitMarkMessageAsRead } from '@ui-chat/hooks/emit-mark-message-as-read.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

interface UseOnIncommingMessageProps {
  disabledChat?: boolean;
}

export const useOnIncommingMessage = ({
  disabledChat = false,
}: Readonly<UseOnIncommingMessageProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);

  const { emitMarkMessageAsRead } = useEmitMarkMessageAsRead();

  onSocketEvent<OnIncommingMessageResponseDTO>(
    socketEventsDictionary.INCOMING_MESSAGE,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const newMessage = OnIncommingMessageMapper.mapFrom(
        parseResponse,
        activeContact,
      );

      if (!newMessage) return;

      if (newMessage) {
        const sounder = new Sounder('/sounds/whatsapp_on_message.mp3');

        sounder.playAudio();

        addMessage(newMessage);
      }

      if (newMessage && !disabledChat) emitMarkMessageAsRead(newMessage?.id);
    },
    [activeContact?.id, addMessage],
  );
};
