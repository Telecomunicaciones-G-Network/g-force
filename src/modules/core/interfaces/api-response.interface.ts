// CHECKED:

export interface ApiResponse<T = unknown> {
  cursor?: string | null;
  error?: string;
  extra?: unknown;
  hasMore?: boolean;
  nextCursor?: string | null;
  results?: T;
  status: number;
  success: boolean;
}
