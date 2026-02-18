import type { ApiBaseResponse } from '@module-core/interfaces';

export interface DollarRate {
  date: string;
  rate: string;
}

export interface DollarRateResults {
  rate_today: DollarRate;
  rate_first_of_the_month: DollarRate;
}

export interface GetDollarRateResponse
  extends Pick<ApiBaseResponse, 'error' | 'status' | 'success'> {
  results: DollarRateResults;
}
