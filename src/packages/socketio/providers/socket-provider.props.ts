import type { PropsWithChildren } from 'react';
import type { SocketConfig } from '../types';

export interface SocketProviderProps extends PropsWithChildren {
  socketUrl?: string;
  config?: SocketConfig;
}
