import type { ContractValues } from '@module-contract/domain/interfaces';
import type { GetContactContractsResponse } from '../../domain/interfaces';
import type { GetContactContractsResponseDTO } from '../dtos';
import type { GetContactContractsResult } from '../interfaces';

export class GetContactContractsMapper {
  public static mapFrom(
    response: GetContactContractsResponseDTO,
  ): GetContactContractsResponse {
    return {
      contracts: response?.results?.map(GetContactContractsMapper.mapFromArray),
      count: response?.count,
      error: response?.error,
      extra: response?.extra,
      next: response?.next,
      previous: response?.previous,
      status: response?.status,
      success: response?.success,
    };
  }

  public static mapFromArray(input: GetContactContractsResult): ContractValues {
    return {
      address: input?.address,
      installationDate: input?.installation_date,
      napBox: input?.nap_box,
      number: input?.contract_number,
      plan: input?.plan,
      speedPlan: input?.speed_plan,
      status: input?.status,
      statusName: input?.status_name,
    };
  }
}
