import type {
  HttpAdapter,
  HttpClientConfiguration,
  UploadFileBody,
} from '../interfaces';

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

  public async getFile(
    endpoint: string,
    configuration?: HttpClientConfiguration,
  ): Promise<string> {
    return await this.fetcher.getFile(endpoint, configuration);
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

  public async uploadFile<T = unknown>(
    endpoint: string,
    body: UploadFileBody,
    configuration?: HttpClientConfiguration,
  ): Promise<T> {
    return await this.fetcher.uploadFile<T>(
      `${this.baseUrl}${endpoint}`,
      body,
      configuration,
    );
  }
}
