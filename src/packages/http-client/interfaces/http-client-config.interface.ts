export interface HttpClientConfig extends RequestInit {
  headers?: Record<string, string>;
  locale?: string;
  params?: string[];
  searchParams?: Record<string, string>;
}
