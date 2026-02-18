import type { ApiBaseResponse } from '@module-core/interfaces';

export interface DollarRateDTO {
  date: string;
  rate: string;
}

export interface DollarRateResultsDTO {
  rate_today: DollarRateDTO;
  rate_first_of_the_month: DollarRateDTO;
}

export type GetDollarRateResponseDTO = ApiBaseResponse<DollarRateResultsDTO>;
