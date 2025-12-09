import type { GetContactContractsResult } from '../interfaces';

export interface GetContactContractsResponseDTO {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  results?: GetContactContractsResult[];
  status: number;
  success: boolean;
}
