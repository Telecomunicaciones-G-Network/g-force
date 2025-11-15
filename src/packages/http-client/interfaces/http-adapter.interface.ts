import type { HttpClientConfiguration } from './http-client-configuration.interface';

export interface HttpAdapter {
  get<T = unknown>(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<T>;

  post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R>;
}
