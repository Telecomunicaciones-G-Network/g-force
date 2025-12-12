import type { GetContactTicketsResult } from '../interfaces';

export interface GetContactTicketsResponseDTO {
  count?: number;
  next: string | null;
  previous: string | null;
  results?: GetContactTicketsResult[];
  status: number;
  success: boolean;
}
