export interface HttpClientConfig extends RequestInit {
  params?: string[];
  searchParams?: Record<string, string>;
  locale?: string;
}
