import type { Contract } from '@module-contract/domain/interfaces';
import type {
  GetContactContractsRequest,
  GetContactContractsResponse,
} from '../../domain/interfaces';
import type {
  GetContactContractsRequestDTO,
  GetContactContractsResponseDTO,
} from '../dtos';
import type { GetContactContractsResult } from '../interfaces';

/**
 * @name GetContactContractsMapper
 *
 * @description This mapper converts a GetContactContractsResponseDTO to a GetContactContractsResponse.
 */
export class GetContactContractsMapper {
  /**
   * @name mapFrom
   *
   * @description Map the response from the API to the response interface.
   *
   * @param {GetContactContractsResponseDTO} response - The response from the API.
   *
   * @returns {GetContactContractsResponse} The response interface.
   */
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

  /**
   * @name mapFromArray
   *
   * @description Map the result from the API to the contract interface.
   *
   * @param {GetContactContractsResult} input - The result from the API.
   *
   * @returns {Contract} The contract interface.
   */
  public static mapFromArray(input: GetContactContractsResult): Contract {
    return {
      address: input?.address,
      clientType: input?.client_type,
      clientTypeName: input?.client_type_name,
      installationDate: input?.installation_date,
      napBox: input?.nap_box,
      number: input?.contract_number,
      planName: input?.plan,
      speedPlan: input?.speed_plan,
      statusCode: input?.status_code,
      statusName: input?.status_name,
    };
  }

  /**
   * @name mapTo
   *
   * @description Map the request to the request interface.
   *
   * @param {GetContactContractsRequest} output - The request.
   *
   * @returns {GetContactContractsRequestDTO} The request interface.
   */
  public static mapTo(
    output: GetContactContractsRequest,
  ): GetContactContractsRequestDTO {
    return {
      page_size: output?.limit?.toString() ?? '20',
      page: output?.page?.toString() ?? '1',
    };
  }
}
