declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly HOST: string;
      readonly MODE: "development" | "staging" | "production";
      readonly NODE_ENV: "development" | "production";
      readonly REACT_SCAN_ON: "true" | "false";
    }
  }
}

export {};
