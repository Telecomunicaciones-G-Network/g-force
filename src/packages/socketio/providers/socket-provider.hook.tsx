'use client';

import type { Socket } from 'socket.io-client';
import type { SocketProviderProps } from './socket-provider.props';

import { useEffect, useMemo, useRef, useState } from 'react';

import { SocketClient } from '../classes/socket.class';

export const useSocketProvider = ({
  socketUrl,
  config,
}: Readonly<Omit<SocketProviderProps, 'children'>>) => {
  const socketRef = useRef<Socket | null>(null);

  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    socketRef.current = SocketClient.getInstance({ socketUrl, config });

    const socket = socketRef.current;

    if (socket && !socket?.connected) {
      socket?.connect();
      console.log(
        `🚀 ~ Socket connected on ${socketUrl} ${config?.path ? `${config?.path}` : ''}`,
      );
    }

    const handleConnect = () => setIsConnected(true);

    const handleDisconnect = () => setIsConnected(false);

    socket?.on('connect', handleConnect);
    socket?.on('disconnect', handleDisconnect);

    return () => {
      socket?.off('connect', handleConnect);
      socket?.off('disconnect', handleDisconnect);
    };
  }, [config, socketUrl]);

  const socket = useMemo(
    () => ({
      socket: socketRef.current,
      isConnected,
    }),
    [isConnected],
  );

  return { socket };
};
