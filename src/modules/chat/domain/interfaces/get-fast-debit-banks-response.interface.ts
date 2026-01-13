import type { ApiResponse } from '@module-core/interfaces';

export interface GetFastDebitBanksResponseBank {
  code: string;
  name: string;
}

export interface GetFastDebitBanksResponse
  extends Pick<ApiResponse, 'error' | 'status' | 'success'> {
  banks: GetFastDebitBanksResponseBank[];
}
