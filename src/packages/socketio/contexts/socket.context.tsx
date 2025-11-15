'use client';

import type { SocketContextValue } from './socket-context.props';

import { createContext } from 'react';

export const SocketContext = createContext<SocketContextValue>({
  socket: null,
});
