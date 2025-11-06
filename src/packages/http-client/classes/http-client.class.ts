import type { HttpAdapter, HttpClientConfig } from "../interfaces";

export class HttpClient {
  constructor(
    private baseUrl: string,
    private readonly fetcher: HttpAdapter,
  ) {}

  async get<T = Response>(
    endpoint: string,
    configurations?: HttpClientConfig,
  ): Promise<T | Error> {
    return await this.fetcher.get<T>(
      `${this.baseUrl}${endpoint}`,
      configurations,
    );
  }

  async post<T = Request, R = Response>(
    endpoint: string,
    body?: T,
    configurations?: HttpClientConfig,
  ): Promise<R | Error> {
    return await this.fetcher.post<T, R>(
      `${this.baseUrl}${endpoint}`,
      body,
      configurations,
    );
  }
}
