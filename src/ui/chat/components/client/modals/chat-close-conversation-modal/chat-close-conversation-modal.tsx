'use client';

import { MdOutlineSpeakerNotesOff } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { ChatCloseConversationModalContent } from './components/chat-close-conversation-modal-content';
import { ChatCloseConversationModalHeader } from './components/chat-close-conversation-modal-header';

import { useChatCloseConversationModal } from './chat-close-conversation-modal.hook';

import styles from './chat-close-conversation-modal.module.css';

/**
 * @name ChatCloseConversationModal
 *
 * @description Chat close conversation modal component
 *
 * TODO: Standarize the focus tailwind classes for DropdownItem to make as default on this one
 * TODO: Set as internar el preventDefault on onSelect of DropdownItem
 * TODO: Create a new component call MessageModal and use here
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
        <ChatCloseConversationModalHeader />
        <ChatCloseConversationModalContent
          disabled={disabledSocketActions}
          isLoading={isLoading}
          onCancel={closeModal}
          onConfirm={onCloseConversation}
        />
      </div>
    </Modal>
  );
};
