import type { HttpClientConfig } from './http-client-config.interface';

export interface HttpAdapter {
  get<T = Response>(
    endpoint: string,
    configurations?: HttpClientConfig,
  ): Promise<T>;

  post<T = Request, R = Response>(
    endpoint: string,
    body?: T,
    configurations?: HttpClientConfig,
  ): Promise<R>;
}
