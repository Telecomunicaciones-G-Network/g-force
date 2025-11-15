import type { PropsWithChildren } from 'react';
import type { SocketConfig } from '../interfaces';

export interface SocketProviderProps extends PropsWithChildren {
  config: SocketConfig;
  token: string | null;
}
