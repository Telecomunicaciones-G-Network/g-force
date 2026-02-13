import type { ApiBaseResponse } from '@module-core/interfaces';

export interface GetFastDebitBanksResultBankDTO {
  code: string;
  name: string;
}

export interface GetFastDebitBanksResultDTO {
  banks: GetFastDebitBanksResultBankDTO[];
}

export type GetFastDebitBanksResponseDTO =
  ApiBaseResponse<GetFastDebitBanksResultDTO>;
