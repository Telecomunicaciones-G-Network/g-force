'use client';

import type { TicketValues } from '@module-ticket/domain/interfaces';
import type { ChatTicketsProps } from './chat-tickets.props';

import { MdMoodBad } from 'react-icons/md';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatTicketCard } from '@ui-chat/components/server/cards/chat-ticket-card';

import { ChatTicketsSkeletons } from './components/chat-tickets-skeletons/chat-tickets-skeletons';

import { useChatTickets } from './chat-tickets.hook';

import styles from './chat-tickets.module.css';

export const ChatTickets = ({ title = '' }: Readonly<ChatTicketsProps>) => {
  const { isError, isLoading, tickets } = useChatTickets();

  return (
    <ChatDetailsTabContentLayout title={title}>
      {isLoading && <ChatTicketsSkeletons />}
      {!isLoading && isError && (
        <div className={styles.base__error}>
          <MdMoodBad className="min-h-10 min-w-10 size-10" />
          <Text
            as="h5"
            className="text-center text-neutral-900"
            level="medium"
            scheme="label"
          >
            Ha ocurrido un error al cargar los tickets
          </Text>
        </div>
      )}
      {!isLoading && !isError && (
        <div className={styles.base}>
          {tickets?.length === 0 && (
            <div className={styles.base__empty}>
              <Icon name="message_info" size={40} />
              <Text
                as="h5"
                className="text-center text-neutral-900"
                level="medium"
                scheme="label"
              >
                No hay tickets que mostrar por el momento
              </Text>
            </div>
          )}
          {tickets?.length > 0 && (
            <>
              <Text as="h5" level="medium" scheme="label">
                Creados / solicitudes
              </Text>
              <div className={styles.base__elements}>
                {tickets?.map((ticket: TicketValues) => (
                  <ChatTicketCard
                    key={ticket?.number?.toString()}
                    {...ticket}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </ChatDetailsTabContentLayout>
  );
};
