import type { GetTicketsResultDTO } from '../interfaces';

export interface GetTicketsResponseDTO {
  count?: number;
  next: string | null;
  previous: string | null;
  results?: GetTicketsResultDTO[];
  status: number;
  success: boolean;
}
