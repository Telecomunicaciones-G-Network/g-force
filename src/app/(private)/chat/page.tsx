import type { Metadata } from 'next';

import { SocketProvider } from '@socketio/providers/socket.provider';

import { cn } from '@gnetwork-ui/utils/cn.util';

import { GetContactsQuery } from '@module-chat/infrastructure/queries/get-contacts.query';

import { socketConfig } from '@ui-core/config/socket.config';

import { getTokenAction } from '@ui-auth/actions/get-token.action';

import { ChatContainer } from '@ui-chat/components/client/templates/chat-container';

import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Gforce - Chat',
  description: 'Gforce Chat',
};

export default async function ChatPage() {
  const token = await getTokenAction();
  const chatContactsResponsePromise = GetContactsQuery();

  return (
    <SocketProvider config={socketConfig} token={token}>
      <div className={cn(styles.base, 'divide-x divide-neutral-200')}>
        <ChatContainer
          chatContactsResponsePromise={chatContactsResponsePromise}
        />
      </div>
    </SocketProvider>
  );
}
