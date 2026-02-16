'use client';

import type { ChatDetailsTabContentLayoutProps as ChatTicketsProps } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { TicketsFilter } from '@ui-ticket/components/client/dropdowns/tickets-filter';
import { TicketCardList } from '@ui-ticket/components/client/lists/ticket-card-list';

import { CreateTicketModal } from '@ui-ticket/components/server/modals/create-ticket-modal';

import { useChatTickets } from './chat-tickets.hook';

import styles from './chat-tickets.module.css';

export const ChatTickets = ({
  title = 'Tickets',
}: Readonly<ChatTicketsProps>) => {
  const {
    changeFilterStatus,
    filterStatus,
    isCreateTicketModalOpen,
    isError,
    isLoading,
    onOpenCreateTicketModal,
    tickets,
  } = useChatTickets();

  return (
    <ChatDetailsTabContentLayout
      actionComponent={
        <CreateTicketModal
          isOpen={isCreateTicketModalOpen}
          onOpenChange={onOpenCreateTicketModal}
        />
      }
      title={title}
    >
      <div className={styles.base}>
        {isLoading && (
          <>
            <Skeleton className={styles.base__label_skeleton} />
            <Skeleton className={styles.base__filter_skeleton} />
          </>
        )}
        {!isError && !isLoading && tickets?.length > 0 && (
          <>
            <Text as="h5" level="medium" scheme="label">
              Creados / Solicitudes
            </Text>
            <TicketsFilter
              changeFilterStatus={changeFilterStatus}
              filterStatus={filterStatus}
            />
          </>
        )}
        <TicketCardList error={isError} loading={isLoading} tickets={tickets} />
      </div>
    </ChatDetailsTabContentLayout>
  );
};
