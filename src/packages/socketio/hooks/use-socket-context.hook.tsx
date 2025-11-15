'use client';

import { use } from 'react';

import { SocketContext } from '../contexts/socket.context';

export const useSocketContext = () => {
  const context = use(SocketContext);

  if (!context) {
    throw new Error('useSocketContext must be used within a SocketProvider');
  }

  return context;
};
