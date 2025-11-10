export interface ApiResponse<T = unknown> {
  error?: string;
  extra?: unknown;
  results?: T;
  status: number;
  success: boolean;
}
