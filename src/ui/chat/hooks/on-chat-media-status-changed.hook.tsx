'use client';

import type { OnChatMediaStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnChatMediaStatusChangedMapper } from '@module-chat/infrastructure/mappers/on-chat-media-status-changed.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

/**
 * @name UseOnChatMediaStatusChangedProps
 *
 * @property onSucess - The callback function to be called when the media status changes successfully
 */
interface UseOnChatMediaStatusChangedProps {
  onSucess?: VoidFunction;
}

/**
 * @name useOnChatMediaStatusChanged
 *
 * @description This hook listens to the `MEDIA_STATUS_CHANGED` socket event:
 * Triggered when the storage status of an attached file (media) of a message changes. Contains the message ID, the media ID,
 * and the new status.
 * - Updates the status of the media in the chat store
 *
 * [Contact event]
 *
 * @returns void
 */
export const useOnChatMediaStatusChanged = ({
  onSucess,
}: Readonly<UseOnChatMediaStatusChangedProps>) => {
  const { updateStorageStatusOfOneMessageById } = useChatStore();

  onSocketEvent<OnChatMediaStatusChangedResponseDTO>(
    socketEventsDictionary.CHAT_MEDIA_STATUS_CHANGED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      if (
        !parseResponse?.media_id ||
        !parseResponse?.message_id ||
        !parseResponse?.storage_status
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      const response = OnChatMediaStatusChangedMapper.mapFrom(parseResponse);

      if (
        !response?.mediaId ||
        !response?.messageId ||
        !response?.storageStatus
      )
        // TODO: Set alert for error
        // TODO: Register error
        return;

      updateStorageStatusOfOneMessageById(
        response?.messageId,
        response?.storageStatus,
      );

      const sounder = new Sounder(chatSoundDictionary.whatsappOnMessage);

      sounder.playAudio();

      onSucess?.();
    },
  );
};
