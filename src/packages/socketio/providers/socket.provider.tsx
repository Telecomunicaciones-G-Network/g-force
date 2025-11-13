'use client';

import type { SocketProviderProps } from './socket-provider.props';
import type { SocketContextProps } from './socket-context.props';

import { createContext } from 'react';

import { useSocketProvider } from './socket-provider.hook';

export const SocketContext = createContext<SocketContextProps>({
  isConnected: false,
  socket: null,
});

export const SocketProvider = ({
  config,
  children,
  socketUrl = '',
}: Readonly<SocketProviderProps>) => {
  const { socket } = useSocketProvider({ config, socketUrl });

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
