export interface ApiResponse<T> {
  error?: string;
  extra?: unknown;
  results?: T;
  status: number;
  success: boolean;
}
