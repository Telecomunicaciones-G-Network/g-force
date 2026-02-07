import { HttpClientConfiguration } from './http-client-configuration.interface';

export interface FetchConfig extends Omit<HttpClientConfiguration, 'headers'> {
  headers?: HeadersInit;
}
