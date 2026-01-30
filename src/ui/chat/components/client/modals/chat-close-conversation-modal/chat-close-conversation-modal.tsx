'use client';

import { MdOutlineSpeakerNotesOff } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { useChatCloseConversationModal } from './chat-close-conversation-modal.hook';

export const ChatCloseConversationModal = () => {
  const {
    disabledSocketActions,
    isLoading,
    isModalOpen,
    onCloseConversation,
    onOpenChange,
  } = useChatCloseConversationModal();

  return (
    <Modal
      className="sm:max-w-[420px] overflow-hidden rounded-2xl"
      isOpen={isModalOpen}
      onOpenChange={onOpenChange}
      triggerComponent={
        <DropdownItem
          className="focus:[&_svg]:fill-chromatic! focus:**:text-chromatic! hover:[&_svg]:fill-chromatic! hover:**:text-chromatic!"
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          <MdOutlineSpeakerNotesOff className="fill-neutral-800 min-h-6 min-w-6 size-6" />
          <Text
            as="span"
            className="text-neutral-600"
            level="small"
            scheme="label"
          >
            Finalizar Conversación
          </Text>
        </DropdownItem>
      }
    >
      <div className="p-6 flex flex-col items-center text-center">
        {/* 1. Icono visual de advertencia */}
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 mb-4">
          <MdOutlineSpeakerNotesOff
            className="h-6 w-6 text-red-600"
            aria-hidden="true"
          />
        </div>

        {/* 2. Títulos y Textos con mejor espaciado */}
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
          className="text-neutral-500 mt-2 mb-6"
          level="small"
          scheme="paragraph"
        >
          Esta acción cerrará el ticket actual y archivará el historial. Esta
          acción no se puede deshacer.
        </Text>

        {/* 3. Botones lado a lado (Grid de 2 columnas) */}
        <div className="grid grid-cols-2 gap-3 w-full">
          <Button
            color="gray"
            disabled={isLoading}
            fullWidth
            onClick={() => onOpenChange(false)}
            scheme="outline"
            className="border-neutral-300"
          >
            Cancelar
          </Button>

          <Button
            color="red"
            disabled={disabledSocketActions}
            fullWidth
            loading={isLoading}
            onClick={onCloseConversation}
          >
            {isLoading ? 'Finalizando...' : 'Finalizar'}
          </Button>
        </div>
      </div>
    </Modal>
  );
};