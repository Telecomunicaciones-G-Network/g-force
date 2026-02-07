'use client';

import type { ChatCloseConversationModalContentProps } from './chat-close-conversation-modal-content.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

/**
 * @name ChatCloseConversationModalContent
 *
 * @description Content component for the chat close conversation modal
 *
 * @property {boolean} disabled - Whether actions are disabled (e.g., socket disconnected)
 * @property {boolean} isLoading - Whether the primary action is loading
 * @property {function} onCancel - Callback for cancel action
 * @property {function} onConfirm - Callback for confirm action
 */
export const ChatCloseConversationModalContent = ({
  disabled = false,
  isLoading = false,
  onCancel,
  onConfirm,
}: Readonly<ChatCloseConversationModalContentProps>) => {
  return (
    <>
      <Text
        as="h2"
        className="text-neutral-900 font-semibold"
        level="small"
        scheme="heading"
      >
        ¿Finalizar conversación?
      </Text>
      <Text
        as="p"
        align="center"
        className="mb-6 mt-2 text-neutral-500"
        level="small"
        scheme="paragraph"
      >
        Esta acción cerrará el chat actual y archivará el mismo en el historial.
        Esta acción no se puede deshacer.
      </Text>
      <div className="grid gap-3 grid-cols-2 w-full">
        <Button
          className="border-neutral-300 hover:bg-chromatic-inverted"
          color="gray"
          disabled={isLoading}
          fullWidth
          onClick={onCancel}
          scheme="outline"
        >
          Cancelar
        </Button>
        <Button
          color="red"
          disabled={disabled}
          fullWidth
          loading={isLoading}
          onClick={onConfirm}
        >
          {isLoading ? 'Finalizando...' : 'Finalizar'}
        </Button>
      </div>
    </>
  );
};
