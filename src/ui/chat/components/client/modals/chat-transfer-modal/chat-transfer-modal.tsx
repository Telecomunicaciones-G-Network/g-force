'use client';

import { MdCompareArrows } from 'react-icons/md';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';

import { ChatTransferModalBody, ChatTransferModalHeader } from './components';

import { useChatTransferModal } from './chat-transfer-modal.hook';

export const ChatTransferModal = () => {
  const { isModalOpen, onOpenChange } = useChatTransferModal();

  return (
    <Modal
      className="sm:max-w-[400px]"
      isOpen={isModalOpen}
      onOpenChange={onOpenChange}
      triggerComponent={
        <DropdownItem
          className="hover:[&_svg]:fill-chromatic! focus:[&_svg]:fill-chromatic! hover:**:text-chromatic! focus:**:text-chromatic!"
          onSelect={(event) => {
            event.preventDefault();
          }}
        >
          <MdCompareArrows className="fill-neutral-800 min-h-6 min-w-6 size-6" />
          <Text
            as="span"
            className="text-neutral-600"
            level="small"
            scheme="label"
          >
            Transferir chat
          </Text>
        </DropdownItem>
      }
    >
      <div className="divide-y divide-neutral-200">
        <ChatTransferModalHeader />
        <ChatTransferModalBody onClose={() => onOpenChange(false)} />
      </div>
    </Modal>
  );
};
