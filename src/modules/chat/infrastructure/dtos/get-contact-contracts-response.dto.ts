import type { GetContactContractsResult } from '../interfaces';

export interface GetContactContractsResponseDTO {
  count?: number;
  next: string | null;
  previous: string | null;
  results?: GetContactContractsResult[];
  status: number;
  success: boolean;
}
