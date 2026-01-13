import type { ApiResponse } from '@module-core/interfaces';

export interface GetFastDebitBanksResultBankDTO {
  code: string;
  name: string;
}

export interface GetFastDebitBanksResultDTO {
  banks: GetFastDebitBanksResultBankDTO[];
}

export type GetFastDebitBanksResponseDTO =
  ApiResponse<GetFastDebitBanksResultDTO>;
