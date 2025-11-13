'use client';

import { use } from 'react';

import { SocketContext } from '../providers/socket.provider';

export const useSocket = () => {
  const context = use(SocketContext);

  if (!context) {
    throw new Error('useSocket must be used within SocketProvider');
  }

  return context;
};
