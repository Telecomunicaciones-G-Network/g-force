import type { PropsWithChildren } from 'react';

import { SocketProvider } from '@socketio/providers/socket.provider';

import { socketConfig } from '@ui-core/config/socket.config';

import { getTokenAction } from '@ui-auth/actions/get-token.action';

export default async function ChatConversationsLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const token = await getTokenAction();

  return (
    <SocketProvider config={socketConfig} token={token}>
      {children}
    </SocketProvider>
  );
}
