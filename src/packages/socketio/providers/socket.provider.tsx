'use client';

import type { SocketProviderProps } from './socket-provider.props';

import { useEffect, useRef } from 'react';

import { SocketClient } from '../classes/socket-client.class';

import { SocketContext } from '../contexts/socket.context';

export function SocketProvider({
  children,
  config,
  token,
}: SocketProviderProps) {
  const socketRef = useRef<SocketClient | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = new SocketClient({
        ...config,
        ...(token && {
          auth: {
            token,
          },
        }),
      });
    }

    return () => {
      if (socketRef.current) {
        socketRef.current.destroy();
        socketRef.current = null;
      }
    };
  }, [config, token]);

  return (
    <SocketContext.Provider value={{ socket: socketRef.current }}>
      {children}
    </SocketContext.Provider>
  );
}
