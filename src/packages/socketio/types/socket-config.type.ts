import type { ManagerOptions, SocketOptions } from 'socket.io-client';

export type SocketConfig = Partial<ManagerOptions & SocketOptions>;
