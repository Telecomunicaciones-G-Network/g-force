'use client';

import type { SocketEventListener } from '../types';

import { useEffect, useRef } from 'react';

import { DEFAULT_SOCKET_LOG_COLOR } from '../constants/default-socket-log-color.constant';
import { DEFAULT_SOCKET_LOG_PREFIX } from '../constants/default-socket-log-prefix.constant';

import { socketLogColorsDictionary } from '../dictionaries/socket-log-colors.dictionary';

import { SocketLogLevels } from '../enums/socket-log-levels.enum';

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
      console.log(
        `%c${DEFAULT_SOCKET_LOG_PREFIX} Received event: ${event}`,
        socketLogColorsDictionary?.[SocketLogLevels.SUCCESS] ??
          DEFAULT_SOCKET_LOG_COLOR,
        data,
      );
      listenerRef.current(data);
    };

    const unsubscribe = socket.on<T>(event, wrappedListener);

    return () => {
      unsubscribe();
    };
  }, [socket, event, ...deps]);
};
