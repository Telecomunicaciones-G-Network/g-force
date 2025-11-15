import type { SocketConfig } from '@socketio/interfaces';

import { ENVS } from '../envs/envs';

export const socketConfig = {
  debug: ENVS.NODE_ENV === 'development',
  namespace: ENVS.GNETWORK_SOCKET_NAMESPACE,
  path: ENVS.GNETWORK_SOCKET_PATH,
  url: ENVS.GNETWORK_SOCKET_BASE_URL,
} as const satisfies SocketConfig;
