import { HttpCache, HttpMethod } from '../types';

export interface HttpClientConfiguration {
  cache?: HttpCache;
  headers?: Record<string, string>;
  method?: HttpMethod;
  params?: string[];
  parseResponseOnCamelCase?: boolean;
  searchParams?: Record<string, string>;
}
