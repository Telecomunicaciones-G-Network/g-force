'use client';

import type { EmitChangeAgentStatusRequest } from '@module-chat/domain/interfaces/emit-change-agent-status-request.interface';
import type {
  EmitChangeAgentStatusRequestDTO,
  EmitChangeAgentStatusResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';
import { ToastSchemes } from '@gnetwork-ui/components/organisms/toasts/toast/enums/toast-schemes.enum';
import { useSocket } from '@socketio/hooks/use-socket.hook';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitChangeAgentStatusMapper } from '@module-chat/infrastructure/mappers/emit-change-agent-status.mapper';

import { useAgentStatusStore } from '@ui-chat/stores/agent-status-store';

export const useEmitChangeAgentStatus = () => {
  const setPendingStatus = useAgentStatusStore(
    (state) => state.setPendingStatus,
  );
  const clearPendingStatus = useAgentStatusStore(
    (state) => state.clearPendingStatus,
  );

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();
  const { showToast } = useToast();

  const emitChangeAgentStatus = useCallback(
    async ({ status, onSuccess }: EmitChangeAgentStatusRequest) => {
      try {
        if (!status || !emitWithAck || !isConnectedAndStatusConnected) return;

        const request = EmitChangeAgentStatusMapper.mapTo({ status });

        if (!request) return;

        setPendingStatus(status);

        const ack = await emitWithAck<
          EmitChangeAgentStatusRequestDTO,
          EmitChangeAgentStatusResponseDTO
        >(socketEmissionsDictionary.SET_AGENT_STATUS, request);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitChangeAgentStatusMapper.mapFrom(parseAck);

        if (!response?.success) {
          clearPendingStatus();
          showToast('Error al cambiar el estado', {
            id: 'emit-change-agent-status-error',
            scheme: ToastSchemes.ERROR,
          });
          return;
        }

        onSuccess?.();
      } catch (_error) {
        clearPendingStatus();
        showToast('Error al cambiar el estado', {
          id: 'emit-change-agent-status-error',
          scheme: ToastSchemes.ERROR,
        });
      }
    },
    [
      emitWithAck,
      isConnectedAndStatusConnected,
      showToast,
      setPendingStatus,
      clearPendingStatus,
    ],
  );

  return {
    emitChangeAgentStatus,
  };
};
