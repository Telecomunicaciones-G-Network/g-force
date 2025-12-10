import type { ChatTicket } from '@ui-chat/interfaces';
import type { ChatTicketsProps } from './chat-tickets.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatTicketCard } from '@ui-chat/components/server/cards/chat-ticket-card';

import { ChatTickets as ChatTicketsIterator } from '@ui-chat/iterators/chat-tickets.iterator';

import styles from './chat-tickets.module.css';

export const ChatTickets = ({ title = '' }: Readonly<ChatTicketsProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <div className={styles.base}>
      <Text as="h5" level="medium" scheme="label">
        Creados / solicitudes
      </Text>
      <div className={styles.base__elements}>
        {ChatTicketsIterator?.map((ticket: ChatTicket) => (
          <ChatTicketCard key={ticket?.id} {...ticket} />
        ))}
      </div>
    </div>
  </ChatDetailsTabContentLayout>
);
