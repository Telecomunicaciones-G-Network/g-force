'use client';

import type { SocketEventListener } from '../types';

import { useEffect, useRef } from 'react';

import { useSocket } from './use-socket.hook';

export const onSocketEvent = <T = unknown>(
  event: string,
  listener: SocketEventListener<T>,
  deps: unknown[] = [],
) => {
  const listenerRef = useRef(listener);

  const { socket } = useSocket();

  useEffect(() => {
    listenerRef.current = listener;
  }, [listener]);

  useEffect(() => {
    if (!socket) return;

    const wrappedListener = (data: T) => {
      listenerRef.current(data);
    };

    const unsubscribe = socket.on<T>(event, wrappedListener);

    return () => {
      unsubscribe();
    };
  }, [socket, event, ...deps]);
};
