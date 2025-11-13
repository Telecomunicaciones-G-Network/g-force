'use client';

import { useCallback, useRef } from 'react';

import { useSocket } from './use-socket.hook';

export const useSocketEmit = <T = unknown>() => {
  const { socket, isConnected } = useSocket();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const emit = useCallback(
    (event: string, data: T) => {
      if (!socket || !isConnected) {
        console.warn('Socket not connected');

        return;
      }
      socket.emit(event, data);
    },
    [socket, isConnected],
  );

  const emitDebounced = useCallback(
    (event: string, data: T, delay = 300) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        emit(event, data);
      }, delay);
    },
    [emit],
  );

  return { emit, emitDebounced };
};
