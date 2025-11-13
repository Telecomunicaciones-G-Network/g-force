import type { SocketConfig } from '../types';

export const SOCKET_DEFAULT_CONFIG: SocketConfig = {
  autoConnect: false,
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  transports: ['websocket', 'polling'],
} as const;
