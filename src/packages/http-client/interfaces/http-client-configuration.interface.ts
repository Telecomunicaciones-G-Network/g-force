import { HttpCache, HttpMethod } from '../types';

export interface HttpClientConfigurationNext {
  tags?: string[];
}

export interface HttpClientConfiguration {
  cache?: HttpCache;
  headers?: Record<string, string>;
  method?: HttpMethod;
  next?: HttpClientConfigurationNext;
  params?: string[];
  parseResponseOnCamelCase?: boolean;
  searchParams?: Record<string, string | undefined>;
}
