// DONE:

export const ENVS = {
  MODE: process.env.NEXT_PUBLIC_MODE ?? process.env.MODE ?? 'development',
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  CRYPTO_KEY: process.env.NEXT_PUBLIC_CRYPTO_KEY ?? 'mysecretkey',
  GNETWORK_API_BASE_URL:
    process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL ?? 'http://localhost:3000',
  GNETWORK_SOCKET_BASE_URL:
    process.env.NEXT_PUBLIC_GNETWORK_SOCKET_BASE_URL ?? 'http://localhost:3000',
  GNETWORK_SOCKET_NAMESPACE:
    process.env.NEXT_PUBLIC_GNETWORK_SOCKET_NAMESPACE ?? '',
  GNETWORK_SOCKET_PATH:
    process.env.NEXT_PUBLIC_GNETWORK_SOCKET_PATH ?? '/socket.io',
  REACT_QUERY_DEV_TOOLS_ON:
    process.env.NEXT_PUBLIC_REACT_QUERY_DEV_TOOLS_ON === 'true' ||
    process.env.NEXT_PUBLIC_REACT_QUERY_DEV_TOOLS_ON === '1',
  REACT_SCAN_ON: process.env.REACT_SCAN_ON ?? false,
};
