import type { Ticket } from '@module-ticket/domain/interfaces';
import type {
  GetContactTicketsRequest,
  GetContactTicketsResponse,
} from '../../domain/interfaces';
import type {
  GetContactTicketsRequestDTO,
  GetContactTicketsResponseDTO,
} from '../dtos';
import type { GetContactTicketsResult } from '../interfaces';

/**
 * @name GetContactTicketsMapper
 *
 * @description This mapper converts a GetContactTicketsResponseDTO to a GetContactTicketsResponse.
 */
export class GetContactTicketsMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts a GetContactTicketsResponseDTO to a GetContactTicketsResponse.
   *
   * @param {GetContactTicketsResponseDTO} input - The input data
   *
   * @returns {GetContactTicketsResponse} The output data
   */
  public static mapFrom(
    input: GetContactTicketsResponseDTO,
  ): GetContactTicketsResponse {
    return {
      count: input?.count,
      next: input?.next,
      previous: input?.previous,
      status: input?.status,
      success: input?.success,
      tickets:
        input?.results?.map((item) =>
          GetContactTicketsMapper.mapFromArray(item),
        ) ?? [],
    };
  }

  /**
   * @name mapFromArray
   *
   * @description This method converts a GetContactTicketsResult to a Ticket.
   *
   * @param {GetContactTicketsResult} input - The input data
   *
   * @returns {Ticket} The output data
   */
  private static mapFromArray(input: GetContactTicketsResult): Ticket {
    return {
      id: input?.ticket_number,
      contractId: input?.contract_id,
      createdAt: input?.created_at,
      dateCreatedAt: input?.date_created_at,
      description: input?.description,
      statusCode: input?.status_code,
      statusName: input?.status_name,
    };
  }

  /**
   * @name mapTo
   *
   * @description This method converts a GetContactTicketsRequest to a GetContactTicketsRequestDTO.
   *
   * @param {GetContactTicketsRequest} output - The output data
   *
   * @returns {GetContactTicketsRequestDTO} The input data
   */
  public static mapTo(
    output: GetContactTicketsRequest,
  ): GetContactTicketsRequestDTO {
    return {
      contract: output?.contractId?.toString() ?? undefined,
      page_size: output?.limit?.toString() ?? '20',
      page: output?.page?.toString() ?? '1',
      status: output?.status ?? undefined,
    };
  }
}
