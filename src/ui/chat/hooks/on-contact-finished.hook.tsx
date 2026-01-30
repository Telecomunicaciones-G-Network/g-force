'use client';

import type { OnContactFinishedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnContactFinishedMapper } from '@module-chat/infrastructure/mappers/on-contact-finished.mapper';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

/**
 * @name useOnContactFinished
 *
 * @description This hook listens to the on `contact_finished` socket event:
 * When a contact conversation is finished. Emitted to the agent that finished the conversation.
 * Contains the ID of the contact and their current conversation.
 * - Deletes the contact from the store when a contact conversation is finished.
 *
 * [Agent event]
 *
 * @returns void
 */
export const useOnContactFinished = () => {
  const deleteOneContactById = useContactStore(
    (state) => state.deleteOneContactById,
  );

  onSocketEvent<OnContactFinishedResponseDTO>(
    socketEventsDictionary.CONTACT_FINISHED,
    (data: OnContactFinishedResponseDTO) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (!parseResponse?.contact_id || !parseResponse?.conversation_id) return;
      // TODO: Set alert for error
      // TODO: Register error

      const response = OnContactFinishedMapper.mapFrom(parseResponse);

      if (!response?.contactId || !response?.conversationId) return;
      // TODO: Set alert for error
      // TODO: Register error

      deleteOneContactById(response?.contactId);
    },
  );
};
