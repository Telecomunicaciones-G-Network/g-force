'use client';

import type { ChatTicketDetailModalProps } from './chat-ticket-detail-modal.props';
import type {
  ContractStatusCode,
  ContractStatusName,
} from '@module-contract/domain/types';

import {
  MdOutlineCalendarToday,
  MdOutlineSell,
  MdOutlineArticle,
  MdPersonOutline,
  MdOutlineAccountTree,
} from 'react-icons/md';

import dayjs from 'dayjs';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { ContractCard } from '@ui-contract/components/client/cards/contract-card';
import { useChatTicketDetailModal } from './chat-ticket-detail-modal.hook';

import styles from './chat-ticket-detail-modal.module.css';

export const ChatTicketDetailModal = ({
  ticketId,
  initialTicketData,
}: Readonly<ChatTicketDetailModalProps>) => {
  const { ticket, isLoading } = useChatTicketDetailModal({ ticketId });

  return (
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
            contract={{
              number: ticket.contract.contract_number,
              address: ticket.contract.address,
              clientType: 0,
              clientTypeName: ticket.contract.client_type_name,
              installationDate: '',
              napBox: '',
              planName: '',
              speedPlan: '',
              statusCode: ticket.contract.status_code as ContractStatusCode,
              statusName: ticket.contract.status_name as ContractStatusName,
            }}
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
              <MdOutlineAccountTree size={22} className={styles.field_icon} />
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
              <MdOutlineCalendarToday size={22} className={styles.field_icon} />
              <div className={styles.field_text}>
                <Text as="span" level="small" scheme="label">
                  {initialTicketData?.createdAt
                    ? dayjs(initialTicketData.createdAt).format('DD/MM/YYYY')
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
          <Text as="p" level="medium" scheme="label" className="font-semibold">
            No se pudo cargar la información
          </Text>
        </div>
      )}
    </div>
  );
};
