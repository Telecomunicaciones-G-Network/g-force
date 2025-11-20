'use client';

import type { SocketProviderProps } from './socket-provider.props';

import { useEffect, useMemo, useState } from 'react';

import { SocketClient } from '../classes/socket-client.class';

import { SocketContext } from '../contexts/socket.context';

export function SocketProvider({
  children,
  config,
  token,
}: SocketProviderProps) {
  const [socket, setSocket] = useState<SocketClient | null>(null);

  const mergedConfig = useMemo(
    () => ({
      ...config,
      ...(token && {
        auth: {
          token,
        },
      }),
    }),
    [config, token],
  );

  useEffect(() => {
    const socketClient = new SocketClient(mergedConfig);

    setSocket(socketClient);

    return () => {
      socketClient.destroy();
      setSocket(null);
    };
  }, [mergedConfig]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
