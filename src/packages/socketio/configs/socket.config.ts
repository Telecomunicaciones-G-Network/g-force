import type { SocketConfig } from '../interfaces';

export const socketConfig: SocketConfig = {
  autoConnect: true,
  debug: false,
  reconnection: true,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 20000,
  transports: ['websocket', 'polling'],
  url: 'http://localhost:3000',
} as const;
