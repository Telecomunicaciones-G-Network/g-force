import type { GetContactInvoicesResult } from '../interfaces/get-contact-invoices-result.interface';

export interface GetContractInvoicesResponseDTOExtra {
  cycle: string;
}

export interface GetContactInvoicesResponseDTO {
  count?: number;
  extra?: GetContractInvoicesResponseDTOExtra;
  next: string | null;
  previous: string | null;
  results?: GetContactInvoicesResult[];
  status: number;
  success: boolean;
}
