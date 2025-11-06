export interface HttpClientConfig extends RequestInit {
  locale?: string;
  params?: string[];
  searchParams?: Record<string, string>;
}
