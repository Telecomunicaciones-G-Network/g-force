'use client';

import type { SocketEventListener } from '../types';

import { useEffect, useRef } from 'react';

import { useSocket } from './use-socket.hook';

export const useSocketEvent = <T = unknown>(
  event: string,
  listener: SocketEventListener<T>,
  deps: unknown[] = [],
) => {
  const listenerRef = useRef(listener);

  const { socket, isConnected } = useSocket();

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!socket || !isConnected) return;

    const wrappedListener = (data: T) => {
      listenerRef.current(data);
    };

    const unsubscribe = socket.on<T>(event, wrappedListener);

    return () => {
      unsubscribe();
    };
  }, [socket, isConnected, event, ...deps]);
};
