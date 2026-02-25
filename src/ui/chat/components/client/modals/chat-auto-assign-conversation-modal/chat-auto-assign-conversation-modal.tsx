'use client';

import { MdOutlineAssignmentInd } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import {
  ChatAutoAssignConversationModalContent,
  ChatAutoAssignConversationModalHeader,
} from './components';

import { useChatAutoAssignConversationModal } from './chat-auto-assign-conversation-modal.hook';

import styles from './chat-auto-assign-conversation-modal.module.css';

/**
 * @name ChatAutoAssignConversationModal
 *
 * @description Chat auto-assign conversation modal component
 */
export const ChatAutoAssignConversationModal = () => {
  const {
    closeModal,
    isDisabled,
    isLoading,
    isModalOpen,
    onSelfAssignConversation,
    onOpenChange,
  } = useChatAutoAssignConversationModal();

  return (
    <Modal
      className="sm:max-w-[420px] overflow-hidden rounded-2xl"
      isOpen={isModalOpen}
      onOpenChange={onOpenChange}
      triggerComponent={
        <DropdownItem
          className="focus:[&_svg]:fill-chromatic! focus:**:text-chromatic! hover:[&_svg]:fill-chromatic! hover:**:text-chromatic!"
          disabled={isDisabled}
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          <MdOutlineAssignmentInd className="fill-neutral-600 min-h-6 min-w-6 size-6" />
          <Text
            as="span"
            className="text-neutral-600"
            level="small"
            scheme="label"
          >
            Asignarme la conversación
          </Text>
        </DropdownItem>
      }
    >
      <div className={styles.base}>
        <ChatAutoAssignConversationModalHeader />
        <ChatAutoAssignConversationModalContent
          isDisabled={isDisabled}
          isLoading={isLoading}
          onCancel={closeModal}
          onConfirm={onSelfAssignConversation}
        />
      </div>
    </Modal>
  );
};
