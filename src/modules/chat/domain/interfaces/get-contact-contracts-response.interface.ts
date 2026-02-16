import type { Contract } from '@module-contract/domain/interfaces';

export interface GetContactContractsResponse {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  contracts?: Contract[];
  status: number;
  success: boolean;
}
