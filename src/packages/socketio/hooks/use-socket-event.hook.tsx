'use client';

import { useEffect, useRef } from 'react';

import { useSocket } from './use-socket.hook';

export const useSocketEvent = <T = unknown>(
  eventName: string,
  callback: (data: T) => void,
) => {
  const callbackRef = useRef(callback);

  const { socket, isConnected } = useSocket();

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!socket || !isConnected) return;

    const handler = (data: T) => {
      callbackRef.current(data);
    };

    socket.on(eventName, handler);

    return () => {
      socket.off(eventName, handler);
    };
  }, [socket, isConnected, eventName]);
};
