'use client';

import type { OnMediaStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';
import { Sounder } from '@sounder/classes/sounder.class';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnMediaStatusChangedMapper } from '@module-chat/infrastructure/mappers/on-media-status-changed.mapper';

import { chatSoundDictionary } from '@ui-chat/dictionaries/chat-sounds.dictionary';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

/**
 * @name UseOnMediaStatusChangedProps
 *
 * @property onSucess - The callback function to be called when the media status changes successfully
 */
interface UseOnMediaStatusChangedProps {
  onSucess?: () => void;
}

/**
 * @name useOnMediaStatusChanged
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
export const useOnMediaStatusChanged = ({
  onSucess,
}: Readonly<UseOnMediaStatusChangedProps>) => {
  const { updateStorageStatusOfOneMessageById } = useChatStore();

  onSocketEvent<OnMediaStatusChangedResponseDTO>(
    socketEventsDictionary.MEDIA_STATUS_CHANGED,
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

      const response = OnMediaStatusChangedMapper.mapFrom(parseResponse);

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
