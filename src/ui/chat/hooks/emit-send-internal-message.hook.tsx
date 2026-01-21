'use client';

import type { EmitSendInternalMessageRequest } from '@module-chat/domain/interfaces';
import type {
  EmitSendInternalMessageRequestDTO,
  EmitSendInternalMessageResponseDTO,
} from '@module-chat/infrastructure/dtos';

import { useCallback } from 'react';

import { useSocket } from '@socketio/hooks/use-socket.hook';
import { useToast } from '@gnetwork-ui/components/organisms/toasts/toast/toast.hook';

import { ToastSchemes } from '@gnetwork-ui/components/organisms/toasts/toast/enums/toast-schemes.enum';

import { socketEmissionsDictionary } from '@module-chat/infrastructure/dictionaries/socket-emissions.dictionary';

import { EmitSendInternalMessageMapper } from '@module-chat/infrastructure/mappers/emit-send-internal-message.mapper';

import { useContactStore } from '@ui-chat/stores/contact-store/contact.store';

export const useEmitSendInternalMessage = () => {
  const activeContact = useContactStore((state) => state.activeContact);

  const { emitWithAck, isConnectedAndStatusConnected } = useSocket();
  const { showToast } = useToast();

  const emitSendInternalMessage = useCallback(
    async ({
      internalMessage,
      onSuccess,
    }: Omit<EmitSendInternalMessageRequest, 'contactId'>) => {
      try {
        if (
          !activeContact?.id ||
          !emitWithAck ||
          !isConnectedAndStatusConnected
        )
          // TODO: Show alert for error
          // Register error
          return;

        const requestDto = EmitSendInternalMessageMapper.mapTo({
          contactId: activeContact?.id,
          internalMessage,
        });

        if (!requestDto?.contact_id || !requestDto?.text)
          // TODO: show alert for error
          // TODO: Register error
          return;

        const ack = await emitWithAck<
          EmitSendInternalMessageRequestDTO,
          EmitSendInternalMessageResponseDTO
        >(socketEmissionsDictionary.SEND_INTERNAL_MESSAGE, requestDto);

        const parseAck = JSON.parse(ack as unknown as string);

        const response = EmitSendInternalMessageMapper.mapFrom(parseAck);

        if (!response?.success || !response?.messageId)
          // TODO: show alert for error
          // TODO: Register error
          return;

        onSuccess?.();
      } catch (_error) {
        // TODO: Handler error better
        showToast('Error al enviar el mensaje interno', {
          id: 'emit-send-internal-message-error',
          scheme: ToastSchemes.ERROR,
        });

        return;
      }
    },
    [emitWithAck, isConnectedAndStatusConnected, showToast, activeContact?.id],
  );

  return {
    emitSendInternalMessage,
  };
};
