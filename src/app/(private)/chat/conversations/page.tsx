import type { Metadata } from 'next';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { GetContactsQuery } from '@module-chat/infrastructure/queries/get-contacts.query';

import { ChatContainer } from '@ui-chat/components/client/templates/chat-container';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gforce Chat - Conversaciones',
  description: 'Gforce Chat - Conversaciones',
};

export default function ChatConversationsPage() {
  const chatContactsResponsePromise = GetContactsQuery();

  return (
    <div className={cn(styles.base, 'divide-x divide-neutral-200')}>
      <ChatContainer
        chatContactsResponsePromise={chatContactsResponsePromise}
      />
    </div>
  );
}
