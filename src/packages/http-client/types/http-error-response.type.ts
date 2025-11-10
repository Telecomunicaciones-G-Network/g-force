import { AxiosError } from 'axios';

export type HttpErrorResponse = AxiosError<{
  error?: string;
  extra?: unknown;
  status: number;
  success: boolean;
}>;
