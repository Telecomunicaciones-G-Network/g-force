declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly HOST: string;
      readonly NODE_ENV: 'development' | 'production';
      readonly NEXT_PUBLIC_MODE: 'development' | 'staging' | 'production';
      readonly NEXT_PUBLIC_CRYPTO_KEY: string;
      readonly NEXT_PUBLIC_GNETWORK_API_BASE_URL: string;
      readonly NEXT_PUBLIC_GNETWORK_SOCKET_BASE_URL: string;
      readonly NEXT_PUBLIC_GNETWORK_SOCKET_NAMESPACE: string;
      readonly NEXT_PUBLIC_GNETWORK_SOCKET_PATH: string;
      readonly NEXT_PUBLIC_REACT_QUERY_DEV_TOOLS_ON: string;
      readonly REACT_SCAN_ON: boolean;
    }
  }
}

export {};
