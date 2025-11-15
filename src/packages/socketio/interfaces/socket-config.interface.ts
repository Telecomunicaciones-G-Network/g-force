import type { ManagerOptions, SocketOptions } from 'socket.io-client';

export interface SocketConfig extends Partial<ManagerOptions & SocketOptions> {
  autoConnect?: boolean;
  debug?: boolean;
  namespace?: string;
  url: string;
}
