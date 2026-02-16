'use client';

import type { TicketCardProps } from './ticket-card.props';

import dayjs from 'dayjs';

import { MdOutlineArrowOutward } from 'react-icons/md';

import { Card } from '@gnetwork-ui/components/atoms/cards/card';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { ModalCard } from '@gnetwork-ui/components/organisms/modals/modal-card';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { ChatTicketDetailModal } from '@ui-chat/components/client/blocks/chat-tickets/components/chat-ticket-detail-modal';

import { ticketCardBorderColorDictionary } from '@ui-ticket/dictionaries/ticket-card-border-color.dictionary';
import { ticketStatusColorDictionary } from '@ui-ticket/dictionaries/ticket-status-color.dictionary';

import styles from './ticket-card.module.css';

/**
 * @name TicketCard
 *
 * @description Component to display a ticket card.
 *
 * @property {boolean} [isTicketModalOpen] - Whether the ticket modal is open.
 * @property {function} [onOpenTicketModal] - Function to open the ticket modal.
 * @property {Ticket} ticket - The ticket to display in the card.
 *
 * TODO: I should to refactor some things here.
 * TODO: Pass only ticket not ticketId
 */
export const TicketCard = ({
  isTicketModalOpen = false,
  onOpenTicketModal,
  ticket,
}: Readonly<TicketCardProps>) => (
  <Card
    className={ticketCardBorderColorDictionary?.[ticket?.statusName]}
    fullWidth
  >
    <div className={styles.base}>
      <ModalCard
        className="sm:max-w-[473px]"
        modalProps={{
          isOpen: isTicketModalOpen,
          onOpenChange: onOpenTicketModal,
          triggerComponent: (
            <button
              aria-label="Ver detalles del ticket"
              className={cn(
                styles.base__arrow_button,
                'bg-red-50 text-red-600',
              )}
              type="button"
            >
              <MdOutlineArrowOutward className="w-5 h-5" />
            </button>
          ),
        }}
        title={ticket?.id ? `Ticket #${ticket?.id}` : 'Ticket'}
      >
        <ChatTicketDetailModal
          ticketId={ticket?.id}
          initialTicketData={ticket}
        />
      </ModalCard>
      {ticket?.id && (
        <Text as="h5" level="small" scheme="label">
          #TCK-{ticket?.id}:
        </Text>
      )}
      <div className={styles.base__body}>
        {ticket?.description && (
          <Text
            as="p"
            className="text-neutral-400"
            level="small"
            scheme="label"
          >
            {ticket?.description}
          </Text>
        )}
        <div className={styles.base__info}>
          {ticket?.createdAt && (
            <Text
              as="span"
              className="text-neutral-400"
              level="small"
              scheme="label"
            >
              {dayjs(ticket?.createdAt).format('DD/MM/YYYY')}
            </Text>
          )}
          {ticket?.statusName && (
            <Text
              as="span"
              className={ticketStatusColorDictionary?.[ticket?.statusName]}
              level="small"
              scheme="label"
            >
              {`→ ${ticket?.statusName}`}
            </Text>
          )}
        </div>
      </div>
    </div>
  </Card>
);
