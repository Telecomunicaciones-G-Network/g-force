import type {
  GetFastDebitBanksResponse,
  GetFastDebitBanksResponseBank,
} from '../../domain/interfaces';
import type {
  GetFastDebitBanksResponseDTO,
  GetFastDebitBanksResultBankDTO,
} from '../dtos';

export class GetFastDebitBanksMapper {
  static mapFrom(
    input: GetFastDebitBanksResponseDTO,
  ): GetFastDebitBanksResponse {
    return {
      banks:
        input?.results?.banks?.map(GetFastDebitBanksMapper.mapFromBankArray) ??
        [],
      error: input?.error,
      status: input?.status,
      success: input?.success,
    };
  }

  static mapFromBankArray(
    input: GetFastDebitBanksResultBankDTO,
  ): GetFastDebitBanksResponseBank {
    return {
      code: input?.code,
      name: input?.name,
    };
  }
}
