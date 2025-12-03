import type { HttpClientConfiguration } from './http-client-configuration.interface';
import type { UploadFileBody } from './upload-file-body.interface';

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

  uploadFile<T = unknown>(
    endpoint: string,
    body: UploadFileBody,
    configuration?: HttpClientConfiguration,
  ): Promise<T>;
}
