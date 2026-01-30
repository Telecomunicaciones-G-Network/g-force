'use client';

import type { OnIncommingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnIncommingMessageMapper } from '@module-chat/infrastructure/mappers/on-incomming-message.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useEmitMarkMessageAsRead } from '@ui-chat/hooks/emit-mark-message-as-read.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name UseOnIncommingMessageProps
 *
 * @property disabledChat - Whether the chat is disabled
 */
interface UseOnIncommingMessageProps {
  disabledChat?: boolean;
}

/**
 * @name useOnIncommingMessage
 *
 * @description This hook listens to the on `incoming_message` socket event:
 * When a new message is received from a contact. Contains all the message data to display in the opened chat panel.
 * - adds the message to the chat store
 * - plays the whatsapp on message sound
 * - marks the message as read if chat is not disabled
 *
 * [Contact event]
 *
 * @returns void
 */
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

      const newMessage = OnIncommingMessageMapper.mapFrom(parseResponse);

      if (
        !newMessage?.conversationId ||
        !newMessage?.id ||
        !newMessage?.sender?.id ||
        !newMessage?.sender?.name ||
        !newMessage?.status ||
        !newMessage?.type
      )
        // TODO: Show alert for error
        // TODO: Register error
        return;

      if (
        newMessage?.media?.storageStatus === MediaStorageStatus.AVAILABLE ||
        !newMessage?.media
      ) {
        const sounder = new Sounder(chatSoundDictionary.whatsappOnMessage);

        sounder.playAudio();
      }

      addMessage(newMessage);

      if (newMessage && !disabledChat) emitMarkMessageAsRead(newMessage?.id);
    },
    [activeContact?.id, addMessage],
  );
};
