'use client';

import type { TicketValues } from '@module-ticket/domain/interfaces';
import type { ChatTicketsProps } from './chat-tickets.props';

import { MdMoodBad, MdFilterList } from 'react-icons/md';
import { IoChevronUp } from 'react-icons/io5';

import { TicketStatusNames } from '@module-ticket/domain/enums/ticket-status-names.enum';

import { Button } from '@gnetwork-ui/components/molecules/buttons/button';
import { Dropdown } from '@gnetwork-ui/components/organisms/dropdowns/dropdown';
import { DropdownItem } from '@gnetwork-ui/components/molecules/dropdowns/dropdown-item';
import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatTicketCard } from '@ui-chat/components/server/cards/chat-ticket-card';

import { ChatCreateTicketModal } from './components/chat-create-ticket-modal';
import { ChatTicketsSkeletons } from './components/chat-tickets-skeletons/chat-tickets-skeletons';

import { useChatTickets, type TicketFilterStatus } from './chat-tickets.hook';

import styles from './chat-tickets.module.css';

const FILTER_OPTIONS: { label: string; value: TicketFilterStatus }[] = [
  { label: 'Todos', value: 'Todos' },
  { label: 'Abierto', value: TicketStatusNames.OPENED },
  { label: 'Cerrado', value: TicketStatusNames.CLOSED },
];

export const ChatTickets = ({ title = '' }: Readonly<ChatTicketsProps>) => {
  const {
    filterStatus,
    handleCloseCreateModal,
    handleFilterChange,
    handleOpenCreateModal,
    isCreateModalOpen,
    isError,
    isLoading,
    tickets,
  } = useChatTickets();

  return (
    <ChatDetailsTabContentLayout
      title={
        <div className={styles.base__header}>
          <Text as="h2" level="large" scheme="label" className="font-bold">
            {title}
          </Text>
          <Button
            color="red"
            onClick={handleOpenCreateModal}
            className={styles.base__create_button}
          >
            Crear Ticket
          </Button>
        </div>
      }
    >

      <ChatCreateTicketModal
        isOpen={isCreateModalOpen}
        onClose={handleCloseCreateModal}
      />

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
          <Text as="h5" level="medium" scheme="label" className="-mt-10">
            Creados / Solicitudes
          </Text>

          <div className={styles.dropdown_container}>
            <Dropdown
              triggerComponent={
                <button
                  className={styles.base__filter_trigger}
                  type="button"
                >
                  <MdFilterList className="size-4" />
                  <Text as="span" level="small" scheme="label" className="flex-1 text-left">
                    Filtrar por: <b>{filterStatus}</b>
                  </Text>
                  <IoChevronUp className="size-4 text-neutral-400" />
                </button>
              }
            >
              {FILTER_OPTIONS.map((option) => (
                <DropdownItem
                  key={option.value}
                  onClick={() => handleFilterChange(option.value)}
                  className={styles.base__dropdown_item}
                >
                <Text
                    as="span"
                    className={filterStatus === option.value ? 'text-primary-500 font-bold' : ''}
                    level="small"
                    scheme="label"
                  >
                    {option.label}
                  </Text>
                </DropdownItem>
              ))}
            </Dropdown>
            </div>

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
            <div className={styles.base__elements}>
              {tickets?.map((ticket: TicketValues) => (
                <ChatTicketCard
                  key={ticket?.number?.toString()}
                  {...ticket}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </ChatDetailsTabContentLayout>
  );
};
