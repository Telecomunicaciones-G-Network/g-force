import type { ContractValues } from '@module-contract/domain/interfaces';

export interface GetContactContractsResponse {
  count?: number;
  error?: string | null;
  extra?: Record<string, string>;
  next: string | null;
  previous: string | null;
  contracts?: ContractValues[];
  status: number;
  success: boolean;
}
