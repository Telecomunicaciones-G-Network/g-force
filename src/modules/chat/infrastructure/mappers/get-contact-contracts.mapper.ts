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
      next: response?.next,
      previous: response?.previous,
      status: response?.status,
      success: response?.success,
    };
  }

  public static mapFromArray(
    input: GetContactContractsResult,
  ): ContractValues & { client_type_name: string } {
    return {
      planName: input?.planName,
      address: input?.address,
      installationDate: input?.installation_date,
      napBox: input?.nap_box,
      number: input?.contract_number,
      plan: input?.plan,
      speedPlan: input?.speed_plan,
      statusCode: input?.status_code,
      statusName: input?.status_name,
      client_type_name: input?.client_type_name,
    };
  }
}
