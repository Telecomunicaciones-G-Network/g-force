import type { SocketConfig } from '@socketio/types';

import { ENVS } from '@ui-core/envs/envs';

export const SOCKET_CONFIG = {
  path: ENVS.GNETWORK_SOCKET_NAMESPACE,
} as const satisfies SocketConfig;
