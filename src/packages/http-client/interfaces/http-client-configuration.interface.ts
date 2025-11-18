import type { HttpCache, HttpMethod } from '../types';

export interface HttpClientConfiguration {
  cache?: HttpCache;
  headers?: Record<string, string>;
  method?: HttpMethod;
  params?: string[];
  searchParams?: Record<string, string>;
}
