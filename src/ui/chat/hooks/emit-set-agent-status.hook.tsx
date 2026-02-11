'use client';

import type { EmitSetAgentStatusRequest } from '@module-chat/domain/interfaces';
import type {
  EmitSetAgentStatusRequestDTO,
  EmitSetAgentStatusResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { AlertSchemes as ToastSchemes } from '@gnetwork-ui/components/molecules/alerts/alert/enums/alert-scheme.enum';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSetAgentStatusMapper } from '@module-chat/infrastructure/mappers/emit-set-agent-status.mapper';

/**
 * @name useEmitSetAgentStatus
 *
 * @description This hook emits a set agent status event to the socket server.
 *
 * @returns emitSetAgentStatus - Function to emit a set agent status event to the socket server
 */
export const useEmitSetAgentStatus = () => {
  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();
  const { showToast } = useToast();

  const emitSetAgentStatus = useCallback(
    async ({ onFinally, onSuccess, status }: EmitSetAgentStatusRequest) => {
      try {
        if (!status || !emitWithAck || !isConnectedAndStatusConnected)
          // TODO: Show alert for error
          // Register error
          return;

        const request = EmitSetAgentStatusMapper.mapTo({ status });

        if (!request?.status)
          // TODO: Show alert for error
          // Register error
          return;

        const ack = await emitWithAck<
          EmitSetAgentStatusRequestDTO,
          EmitSetAgentStatusResponseDTO
        >(socketEmissionsDictionary.SET_AGENT_STATUS, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSetAgentStatusMapper.mapFrom(parseAck);

        if (!response?.success) {
          // TODO: Show alert for error
          // Register error
          // clearPendingStatus();
          return;
        }

        onSuccess?.();
      } catch (_error) {
        showToast('Error al cambiar el estado', {
          id: 'emit-set-agent-status-error',
          scheme: ToastSchemes.ERROR,
        });
      } finally {
        onFinally?.();
      }
    },
    [emitWithAck, isConnectedAndStatusConnected, showToast],
  );

  return {
    emitSetAgentStatus,
  };
};
