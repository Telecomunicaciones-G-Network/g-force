declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly HOST: string;
      readonly MODE: 'development' | 'staging' | 'production';
      readonly NEXT_PUBLIC_GNETWORK_API_BASE_URL: string;
      readonly NEXT_PUBLIC_CRYPTO_KEY: string;
      readonly NODE_ENV: 'development' | 'production';
      readonly REACT_SCAN_ON: 'true' | 'false';
    }
  }
}

export {};
