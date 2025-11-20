// PENDING:

'use client';

import type { SocketStatus } from '../types';

import { useEffect, useState } from 'react';

import { SocketStatus as SocketStatusValues } from '../enums/socket-status.enum';

import { useSocketContext } from './use-socket-context.hook';

export function useSocket() {
  const { socket } = useSocketContext();

  const [status, setStatus] = useState<SocketStatus>(
    SocketStatusValues.DISCONNECTED,
  );
  const [isConnected, setIsConnected] = useState<boolean>(false);

  useEffect(() => {
    if (!socket) return;

    const handleConnect = () => {
      setStatus(SocketStatusValues.CONNECTED);
      setIsConnected(true);
    };

    const handleDisconnect = () => {
      setStatus(SocketStatusValues.DISCONNECTED);
      setIsConnected(false);
    };

    const handleError = () => {
      setStatus(SocketStatusValues.ERROR);
      setIsConnected(false);
    };

    const handleReconnecting = () => {
      setStatus(SocketStatusValues.RECONNECTING);
      setIsConnected(false);
    };

    const unsubConnect = socket.on('connect', handleConnect);
    const unsubDisconnect = socket.on('disconnect', handleDisconnect);
    const unsubError = socket.on('connect_error', handleError);
    const unsubReconnecting = socket.on('reconnecting', handleReconnecting);

    setStatus(socket.getStatus());
    setIsConnected(socket.isConnected());

    return () => {
      unsubConnect();
      unsubDisconnect();
      unsubError();
      unsubReconnecting();
    };
  }, [socket]);

  return {
    emit: socket?.emit.bind(socket),
    emitWithAck: socket?.emitWithAck.bind(socket),
    isConnected,
    off: socket?.off.bind(socket),
    on: socket?.on.bind(socket),
    once: socket?.once.bind(socket),
    socket,
    status,
  };
}
