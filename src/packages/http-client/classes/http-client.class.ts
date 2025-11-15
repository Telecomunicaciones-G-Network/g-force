import type { HttpAdapter, HttpClientConfiguration } from '../interfaces';

export class HttpClient {
  constructor(
    private baseUrl: string,
    private readonly fetcher: HttpAdapter,
  ) {}

  public async get<T = unknown>(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    return await this.fetcher.get<T>(
      `${this.baseUrl}${endpoint}`,
      configuration,
    );
  }

  public async post<T = unknown, R = unknown>(
    endpoint: string,
    body?: T,
    configuration?: HttpClientConfiguration,
  ): Promise<R> {
    return await this.fetcher.post<T, R>(
      `${this.baseUrl}${endpoint}`,
      body,
      configuration,
    );
  }
}
