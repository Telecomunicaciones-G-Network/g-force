export const ENVS = {
  MODE: process.env.MODE ?? "development",
  NODE_ENV: process.env.NODE_ENV ?? "development",
  CRYPTO_KEY: process.env.NEXT_PUBLIC_CRYPTO_KEY ?? "mysecretkey",
  GNETWORK_API_BASE_URL:
    process.env.NEXT_PUBLIC_GNETWORK_API_BASE_URL ?? "http://localhost:3000",
  REACT_SCAN_ON: process.env.REACT_SCAN_ON ?? "false",
};
