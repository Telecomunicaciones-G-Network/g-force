'use client';

import { MdOutlineSpeakerNotesOff } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { useChatCloseConversationModal } from './chat-close-conversation-modal.hook';

import styles from './chat-close-conversation-modal.module.css';

/**
 * @name ChatCloseConversationModal
 *
 * @description Chat close conversation modal component
 *
 * TODO: Standarize the focus tailwind classes for DropdownItem to make as default on this one
 * TODO: Set as internar el preventDefault on onSelect of DropdownItem
 */
export const ChatCloseConversationModal = () => {
  const {
    closeModal,
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
      <div className={styles.base}>
        {/* 1. Icono visual de advertencia */}
        <div
          className={cn(
            styles.base__header,
            'bg-red-100 h-12 mx-auto mb-4 rounded-full w-12',
          )}
        >
          <MdOutlineSpeakerNotesOff
            aria-hidden="true"
            className="min-h-6 min-w-6 size-6 text-red-600"
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
          className="mb-6 mt-2 text-neutral-500"
          level="small"
          scheme="paragraph"
        >
          Esta acción cerrará el ticket actual y archivará el historial. Esta
          acción no se puede deshacer.
        </Text>
        {/* 3. Botones lado a lado (Grid de 2 columnas) */}
        <div className={cn(styles.base__footer, 'grid-cols-2 gap-3')}>
          <Button
            className="border-neutral-300 hover:bg-chromatic-inverted"
            color="gray"
            disabled={isLoading}
            fullWidth
            onClick={closeModal}
            scheme="outline"
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
