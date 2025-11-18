export interface ApiResponse<T = unknown> {
  cursor?: string | null;
  error?: string;
  extra?: unknown;
  has_more?: true;
  next_cursor?: string | null;
  results?: T;
  status: number;
  success: boolean;
}
