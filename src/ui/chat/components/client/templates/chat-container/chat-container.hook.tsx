'use client';

import { useSocket } from '@socketio/hooks/use-socket.hook';

export const useChatContainer = () => {
  const { isConnected } = useSocket();

  return {
    isConnected,
  };
};
