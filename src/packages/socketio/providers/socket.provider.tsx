'use client';

import type { SocketProviderProps } from './socket-provider.props';

import { useEffect, useMemo, useRef, useState } from 'react';

import { SocketClient } from '../classes/socket-client.class';

import { SocketContext } from '../contexts/socket.context';

export function SocketProvider({
  children,
  config,
  token,
}: SocketProviderProps) {
  const [socket, setSocket] = useState<SocketClient | null>(null);
  const socketRef = useRef<SocketClient | null>(null);

  const configString = JSON.stringify(config);
  const tokenString = token ?? '';

  const mergedConfig = useMemo(
    () => ({
      ...JSON.parse(configString),
      ...(tokenString && {
        auth: {
          token: tokenString,
        },
      }),
    }),
    [configString, tokenString],
  );

  useEffect(() => {
    if (socketRef.current) {
      return;
    }

    const socketClient = new SocketClient(mergedConfig);
    socketRef.current = socketClient;
    setSocket(socketClient);

    return () => {
      if (socketRef.current) {
        socketRef.current.destroy();
        socketRef.current = null;
        setSocket(null);
      }
    };
  }, [mergedConfig]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
