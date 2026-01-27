'use client';

import type { ChatTicketDetailModalProps } from './chat-ticket-detail-modal.props';

import {
  MdClose,
  MdAppRegistration,
  MdOutlineCalendarToday,
  MdOutlineSell,
  MdOutlineArticle,
  MdPersonOutline,
  MdOutlineAccountTree,
} from 'react-icons/md';

import dayjs from 'dayjs';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { ContractCard } from '../chat-create-ticket-modal/components/contract-card/contract-card';
import { Modal } from '@gnetwork-ui/components/organisms/modals/modal';
import { useChatTicketDetailModal } from './chat-ticket-detail-modal.hook';

import styles from './chat-ticket-detail-modal.module.css';

export const ChatTicketDetailModal = ({
  isOpen,
  onClose,
  ticketId,
  initialTicketData,
}: Readonly<ChatTicketDetailModalProps>) => {
  const { ticket, isLoading } = useChatTicketDetailModal({ ticketId, isOpen });

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={(open) => !open && onClose()}
      triggerComponent={<div />}
      hideModalClose
    >
      <div className={styles.modal}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.header__title}>
            <div className={styles.base__icon_wrapper}>
              <MdAppRegistration size={24} />
            </div>
            <Text as="h2" level="large" scheme="label" className="font-bold">
              Ticket #{ticket?.id || ticketId}
            </Text>
          </div>
          <button
            className={styles.header__close}
            onClick={onClose}
            type="button"
          >
            <MdClose className="size-5 text-neutral-500" />
          </button>
        </div>

        {/* Content */}
        <div className={styles.content}>
          {isLoading ? (
            <div className={styles.loading}>
              <Text as="p" level="medium" scheme="label">
                Cargando detalles...
              </Text>
            </div>
          ) : ticket ? (
            <>
              <ContractCard
                number={ticket.contract.contract_number}
                address={ticket.contract.address}
                client_type_name={ticket.contract.client_type_name}
                onClick={() => {}}
              />

              <div className={styles.field_box}>
                <MdPersonOutline size={22} className={styles.field_icon} />
                <div className={styles.field_text}>
                  <Text
                    as="span"
                    level="small"
                    scheme="label"
                    className="font-semibold"
                  >
                    {ticket.client.name} {ticket.client.last_name}
                  </Text>
                </div>
              </div>

              <div className={styles.grid_row}>
                <div className={styles.field_box}>
                  <MdOutlineAccountTree
                    size={22}
                    className={styles.field_icon}
                  />
                  <div className={styles.field_text}>
                    <Text as="span" level="small" scheme="label">
                      {ticket.assigned_department_name || 'Sistemas'}
                    </Text>
                  </div>
                </div>

                <div className={styles.field_box}>
                  <MdOutlineArticle size={22} className={styles.field_icon} />
                  <div className={styles.field_text}>
                    <Text
                      as="span"
                      level="small"
                      scheme="label"
                      title={ticket.issue_name}
                    >
                      {ticket.issue_name}
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles.grid_row}>
                <div className={styles.field_box}>
                  <MdOutlineSell size={22} className={styles.field_icon} />
                  <div className={styles.field_text}>
                    <Text as="span" level="small" scheme="label">
                      {ticket.status_name}
                    </Text>
                  </div>
                </div>

                <div className={styles.field_box}>
                  <MdOutlineCalendarToday
                    size={22}
                    className={styles.field_icon}
                  />
                  <div className={styles.field_text}>
                    <Text as="span" level="small" scheme="label">
                      {initialTicketData?.createdAt
                        ? dayjs(initialTicketData.createdAt).format(
                            'DD/MM/YYYY',
                          )
                        : ticket.visit_date || 'No disponible'}
                    </Text>
                  </div>
                </div>
              </div>

              <div className={styles.description_section}>
                <Text
                  as="h4"
                  level="medium"
                  scheme="label"
                  className="font-semibold ml-1"
                >
                  Descripción del asunto
                </Text>
                <div className={styles.description_box}>
                  {ticket.description ||
                    'Sin descripción disponible para este ticket.'}
                </div>
              </div>
            </>
          ) : (
            <div className={styles.error}>
              <Text
                as="p"
                level="medium"
                scheme="label"
                className="font-semibold"
              >
                No se pudo cargar la información
              </Text>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};
