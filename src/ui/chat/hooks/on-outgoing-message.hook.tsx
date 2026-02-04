'use client';

import type { OnOutgoingMessageResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnOutgoingMessageMapper } from '@module-chat/infrastructure/mappers/on-outgoing-message.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';
import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

/**
 * @name useOnOutgoingMessage
 *
 * @description This hook listens to the on `outgoing_message` socket event:
 * When an agent sends a new message in a contact's chat. This includes both regular messages sent to the contact,
 * as well as internal messages and event messages. Contains all message data to be displayed in the open chat panel.
 * - Add the message if assigned agent is not equal than conversation agent
 * Emitted to the agent when a message is sent. Contains the message data.
 *
 *[Contact event]
 *
 * @returns void
 */
export const useOnOutgoingMessage = () => {
  const activeAgent = useContactStore((state) => state.activeAgent);
  const activeContact = useContactStore((state) => state.activeContact);

  const addMessage = useChatStore((state) => state.addMessage);

  onSocketEvent<OnOutgoingMessageResponseDTO>(
    socketEventsDictionary.OUTGOING_MESSAGE,
    (data: OnOutgoingMessageResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.message_id ||
        !parseResponse?.contact_id ||
        !parseResponse?.conversation_id ||
        !parseResponse?.status ||
        !parseResponse?.type
      )
        // TODO: Show alert for error
        // TODO: Register error
        return;

      const response = OnOutgoingMessageMapper.mapFrom(parseResponse);

      if (
        !response?.id ||
        !response?.conversationId ||
        !response?.status ||
        !response?.type
      )
        // TODO: Show alert for error
        // TODO: Register error
        return;

      if (
        response?.conversationId === activeContact?.latestConversation?.id &&
        response?.sender?.id === activeAgent?.id
      )
        return;

      if (
        response?.conversationId === activeContact?.latestConversation?.id &&
        response?.sender?.id !== activeAgent?.id
      ) {
        const sounder = new Sounder(chatSoundDictionary.whatsappOnMessage);

        addMessage(response);
        sounder.playAudio();
      }
    },
  );
};
