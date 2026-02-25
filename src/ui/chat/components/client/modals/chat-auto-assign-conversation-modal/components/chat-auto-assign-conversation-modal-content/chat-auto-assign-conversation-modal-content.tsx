'use client';

import type { ChatAutoAssignConversationModalContentProps } from './chat-auto-assign-conversation-modal-content.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';

/**
 * @name ChatAutoAssignConversationModalContent
 *
 * @description Content component for the chat auto-assign conversation modal
 */
export const ChatAutoAssignConversationModalContent = ({
  isDisabled = false,
  isLoading = false,
  onCancel,
  onConfirm,
}: Readonly<ChatAutoAssignConversationModalContentProps>) => {
  return (
    <>
      <Text
        as="h2"
        className="text-neutral-900 font-semibold"
        level="small"
        scheme="heading"
      >
        ¿Asignarme la conversación?
      </Text>
      <Text
        as="p"
        align="center"
        className="mb-6 mt-2 text-neutral-500"
        level="small"
        scheme="paragraph"
      >
        Esta acción te asignará la conversación actual para que seas el agente responsable.
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
          color="default"
          disabled={isDisabled}
          fullWidth
          loading={isLoading}
          onClick={onConfirm}
        >
          {isLoading ? 'Asignando...' : 'Asignarme'}
        </Button>
      </div>
    </>
  );
};
