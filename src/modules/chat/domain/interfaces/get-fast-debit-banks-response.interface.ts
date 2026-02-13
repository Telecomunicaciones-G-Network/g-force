import type { ApiBaseResponse } from '@module-core/interfaces';

export interface GetFastDebitBanksResponseBank {
  code: string;
  name: string;
}

export interface GetFastDebitBanksResponse
  extends Pick<ApiBaseResponse, 'error' | 'status' | 'success'> {
  banks: GetFastDebitBanksResponseBank[];
}
