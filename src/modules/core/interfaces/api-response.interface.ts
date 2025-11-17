export interface ApiResponse<T = unknown> {
  cursor?: string;
  error?: string;
  extra?: unknown;
  has_more?: true;
  nextCursor?: string;
  results?: T;
  status: number;
  success: boolean;
}
