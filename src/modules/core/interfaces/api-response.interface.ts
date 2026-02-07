export interface ApiResponse<T = unknown> {
  cursor?: string | null;
  error?: string;
  extra?: Record<string, string>;
  hasMore?: boolean;
  nextCursor?: string | null;
  results?: T;
  status: number;
  success: boolean;
}
