import type { ChatComment, ChatTicket } from '@ui-chat/interfaces';
import type { ChatHistoryProps } from './chat-history.props';

import { Text } from '@gnetwork-ui/components/atoms/texts/text';

import { ChatDetailsTabContentLayout } from '@ui-chat/layouts/chat-details-tab-content-layout';

import { ChatCommentCard } from '@ui-chat/components/server/cards/chat-comment-card';
import { ChatTicketCard } from '@ui-chat/components/server/cards/chat-ticket-card';

import { chatComments } from '@ui-chat/iterators/chat-comments.iterator';
import { ChatTickets } from '@ui-chat/iterators/chat-tickets.iterator';

import styles from './chat-history.module.css';

export const ChatHistory = ({ title = '' }: Readonly<ChatHistoryProps>) => (
  <ChatDetailsTabContentLayout title={title}>
    <div className={styles.base}>
      <Text as="h5" level="medium" scheme="label">
        Tickets creados / solicitudes
      </Text>
      <div className={styles.base__elements}>
        {ChatTickets?.map((ticket: ChatTicket) => (
          <ChatTicketCard key={ticket?.id} {...ticket} />
        ))}
      </div>
    </div>
    <div className={styles.base}>
      <Text as="h5" level="medium" scheme="label">
        Notas de agentes anteriores
      </Text>
      <div className={styles.base__elements}>
        {chatComments?.map((comment: ChatComment) => (
          <ChatCommentCard key={comment?.id} {...comment} />
        ))}
      </div>
    </div>
  </ChatDetailsTabContentLayout>
);
