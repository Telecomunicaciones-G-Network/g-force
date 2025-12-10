import type { GetContactTicketsResult } from '../interfaces';

export interface GetContactTicketsResponseDTO {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  results?: GetContactTicketsResult[];
  status: number;
  success: boolean;
}
