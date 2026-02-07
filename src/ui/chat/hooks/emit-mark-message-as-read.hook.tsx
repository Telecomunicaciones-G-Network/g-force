'use client';

import { useCallback } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitMarkMessageAsReadMapper } from '@module-chat/infrastructure/mappers/emit-mark-message-as-read.mapper';

export const useEmitMarkMessageAsRead = () => {
  const { emitWithAck } = useSocket();

  const emitMarkMessageAsRead = useCallback(
    async (messageId: string) => {
      try {
        const request = EmitMarkMessageAsReadMapper.mapTo({ messageId });

        await emitWithAck?.(
          socketEmissionsDictionary.MARK_MESSAGE_AS_READ,
          request,
        );
      } catch (_error) {
        return;
      }
    },
    [emitWithAck],
  );

  return {
    emitMarkMessageAsRead,
  };
};
