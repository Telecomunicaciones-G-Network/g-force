'use client';

import type { OnChatMessageReceivedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { MediaStorageStatus } from '@module-chat/domain/enums/media-storage-status.enum';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnChatMessageReceivedMapper } from '@module-chat/infrastructure/mappers/on-chat-message-received.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useEmitMarkMessagesAsRead } from '@ui-chat/hooks/emit-mark-messages-as-read.hook';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';
import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name UseOnChatMessageReceivedProps
 *
 * @property disabledChat - Whether the chat is disabled
 */
interface UseOnChatMessageReceivedProps {
  disabledChat?: boolean;
}

/**
 * @name useOnChatMessageReceived
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
export const useOnChatMessageReceived = ({
  disabledChat = false,
}: Readonly<UseOnChatMessageReceivedProps>) => {
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);

  const { emitMarkMessagesAsRead } = useEmitMarkMessagesAsRead();

  onSocketEvent<OnChatMessageReceivedResponseDTO>(
    socketEventsDictionary.CHAT_MESSAGE_RECEIVED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const newMessage = OnChatMessageReceivedMapper.mapFrom(parseResponse);

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

      if (newMessage && !disabledChat)
        emitMarkMessagesAsRead(activeContact?.id);
    },
    [activeContact?.id, addMessage],
  );
};
