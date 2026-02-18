import type {
  GetDollarRateResponse,
  DollarRateResults,
  DollarRate,
} from '../../domain/interfaces';
import type {
  GetDollarRateResponseDTO,
  DollarRateResultsDTO,
  DollarRateDTO,
} from '../dtos';

export class GetDollarRateMapper {
  static mapFrom(input: GetDollarRateResponseDTO): GetDollarRateResponse {
    return {
      error: input?.error,
      status: input?.status,
      success: input?.success,
      results: input?.results
        ? GetDollarRateMapper.mapFromResults(input.results)
        : {
            rate_today: { date: '', rate: '' },
            rate_first_of_the_month: { date: '', rate: '' },
          },
    };
  }

  static mapFromResults(input: DollarRateResultsDTO): DollarRateResults {
    return {
      rate_today: GetDollarRateMapper.mapFromRate(input.rate_today),
      rate_first_of_the_month: GetDollarRateMapper.mapFromRate(
        input.rate_first_of_the_month,
      ),
    };
  }

  static mapFromRate(input: DollarRateDTO): DollarRate {
    return {
      date: input?.date ?? '',
      rate: input?.rate ?? '',
    };
  }
}
