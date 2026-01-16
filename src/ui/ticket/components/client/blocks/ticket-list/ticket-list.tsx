'use client';

import type { TicketValues } from '@module-ticket/domain/interfaces';
import type { TicketListProps } from './ticket-list.props';

import { MdMoodBad } from 'react-icons/md';

import { Icon } from '@gnetwork-ui/components/atoms/icons/icon';
import { Text } from '@gnetwork-ui/components/atoms/texts/text';
import { Skeleton } from '@gnetwork-ui/components/atoms/skeletons/skeleton';

import { TicketCard } from '@ui-ticket/components/server/cards/ticket-card';

import { useTicketList } from './ticket-list.hook';

import styles from './ticket-list.module.css';

export const TicketList = ({
  title = 'Tickets',
  contactId,
}: Readonly<TicketListProps>) => {
  const { isError, isLoading, tickets } = useTicketList({ contactId });

  return (
    <div className={styles.base}>
      {title && (
        <Text as="h4" level="medium" scheme="heading">
          {title}
        </Text>
      )}

      {isLoading && (
        <div className={styles.base__loading}>
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-lg" />
          ))}
        </div>
      )}

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
        <>
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
              {tickets.map((ticket: TicketValues) => (
                <TicketCard key={ticket?.number?.toString()} {...ticket} />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};
