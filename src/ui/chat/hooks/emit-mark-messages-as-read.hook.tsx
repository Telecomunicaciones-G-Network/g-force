'use client';

import { useCallback } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitMarkMessagesAsReadMapper } from '@module-chat/infrastructure/mappers/emit-mark-messages-as-read.mapper';

export const useEmitMarkMessagesAsRead = () => {
  const { emitWithAck } = useSocket();

  const emitMarkMessagesAsRead = useCallback(
    async (contactId?: string) => {
      try {
        if (!contactId) return;

        const request = EmitMarkMessagesAsReadMapper.mapTo({ contactId });

        await emitWithAck?.(
          socketEmissionsDictionary.MARK_MESSAGES_AS_READ,
          request,
        );
      } catch (_error) {
        return;
      }
    },
    [emitWithAck],
  );

  return {
    emitMarkMessagesAsRead,
  };
};
