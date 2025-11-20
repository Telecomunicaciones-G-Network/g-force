import type { PropsWithChildren } from 'react';

import { SocketProvider } from '@socketio/providers/socket.provider';

import { getTokenAction } from '@ui-auth/actions/get-token.action';

import { socketConfig } from '@ui-core/config/socket.config';

export default async function ChatLayout({
  children,
}: Readonly<PropsWithChildren>) {
  const token = await getTokenAction();

  return (
    <SocketProvider config={socketConfig} token={token}>
      {children}
    </SocketProvider>
  );
}
