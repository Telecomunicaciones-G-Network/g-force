'use client';

import type { OnMediaStatusChangedResponseDTO } from '@module-chat/infrastructure/dtos';

import { Sounder } from '@sounder/classes/sounder.class';
import { onSocketEvent } from '@socketio/hooks/use-socket-event.hook';

import { socketEventsDictionary } from '@module-chat/infrastructure/dictionaries/socket-events.dictionary';

import { OnMediaStatusChangedMapper } from '@module-chat/infrastructure/mappers/on-media-status-changed.mapper';

import { useChatStore } from '@ui-chat/stores/chat-store/chat.store';

interface UseOnMediaStatusChangedProps {
  onSucess?: () => void;
}

export const useOnMediaStatusChanged = ({
  onSucess,
}: Readonly<UseOnMediaStatusChangedProps>) => {
  const { updateStorageStatusOfOneMessageById } = useChatStore();

  onSocketEvent<OnMediaStatusChangedResponseDTO>(
    socketEventsDictionary.MEDIA_STATUS_CHANGED,
    (data) => {
      const parseResponse = JSON.parse(data as unknown as string);

      const response = OnMediaStatusChangedMapper.mapFrom(parseResponse);

      if (
        !response?.mediaId ||
        !response?.messageId ||
        !response?.storageStatus
      ) {
        return;
      }

      updateStorageStatusOfOneMessageById(
        response?.messageId,
        response?.storageStatus,
      );

      const sounder = new Sounder('/sounds/whatsapp-on-message.mp3');

      sounder.playAudio();

      onSucess?.();
    },
  );
};
