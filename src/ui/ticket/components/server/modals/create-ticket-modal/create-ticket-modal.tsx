import type { CreateTicketModalProps } from './create-ticket-modal.props';

import { MdAppRegistration } from 'react-icons/md';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { ModalCard } from '@gnetwork-ui/components/organisms/modals/modal-card';

import { CreateTicketModalContent } from './components/create-ticket-modal-content';

import styles from './create-ticket-modal.module.css';

/**
 * @name CreateTicketModal
 *
 * @description Component to create a new ticket.
 *
 * @property {boolean} [isOpen] - Whether the create ticket modal is open.
 * @property {function} [onOpenChange] - Function to open the create ticket modal.
 */
export const CreateTicketModal = ({
  isOpen = false,
  onOpenChange,
}: CreateTicketModalProps) => (
  <ModalCard
    className="sm:max-w-[473px]"
    headerIcon={
      <MdAppRegistration className="fill-red-600 min-h-6 min-w-6 size-6" />
    }
    modalProps={{
      isOpen,
      onOpenChange,
      triggerComponent: (
        <Button className={styles.base} color="red">
          Crear Ticket
        </Button>
      ),
    }}
    title="Ticket"
  >
    <CreateTicketModalContent onClose={() => onOpenChange?.(false)} />
  </ModalCard>
);
