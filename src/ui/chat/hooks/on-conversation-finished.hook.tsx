'use client';

import type { OnConversationFinishedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnConversationFinishedMapper } from '@module-chat/infrastructure/mappers/on-conversation-finished.mapper';

import { ChatModes } from '../enums/chat-modes.enum';

import { useContactStore } from '../stores/contact-store/contact.store';

/**
 * On conversation finished hook
 *
 * This hook listens to the on `conversation_finished` socket event:
 * - Leave conversation if active contact is equal to contact on socket event when a conversation is finished.
 * - Change chat mode to list if active contact is the same that contact on socket event
 * [Contact event]
 */
export const useOnConversationFinished = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const setActiveContact = useContactStore((state) => state.setActiveContact);
  const setChatMode = useContactStore((state) => state.setChatMode);

  onSocketEvent<OnConversationFinishedResponseDTO>(
    socketEventsDictionary.CONVERSATION_FINISHED,
    (data: OnConversationFinishedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.contact_id || !parseResponse?.conversation_id) return;

      const response = OnConversationFinishedMapper.mapFrom(parseResponse);

      if (!response?.contactId || !response?.conversationId) return;

      if (activeContact?.id === response?.contactId) {
        setActiveContact(null);
        setChatMode(ChatModes.LIST);

        return;
      }
    },
  );
};
