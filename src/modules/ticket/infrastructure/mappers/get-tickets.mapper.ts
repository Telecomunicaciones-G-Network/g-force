import type {
  GetTicketsRequest,
  GetTicketsResponse,
  Ticket,
} from '../../domain/interfaces';
import type { GetTicketsRequestDTO, GetTicketsResponseDTO } from '../dtos';
import type { GetTicketsResultDTO } from '../interfaces';

export class GetTicketsMapper {
  public static mapFrom(input: GetTicketsResponseDTO): GetTicketsResponse {
    return {
      count: input?.count,
      next: input?.next,
      previous: input?.previous,
      status: input?.status,
      success: input?.success,
      tickets:
        input?.results?.map((item) => GetTicketsMapper.mapFromArray(item)) ??
        [],
    };
  }

  public static mapFromArray(input: GetTicketsResultDTO): Ticket {
    return {
      id: input?.id,
      contractId: input?.contract_id,
      createdAt: input?.created_at,
      dateCreatedAt: input?.date_created_at,
      description: input?.short_description,
      statusCode: input?.status_code,
      statusName: input?.status_name,
    };
  }

  public static mapTo(output: GetTicketsRequest): GetTicketsRequestDTO {
    return {
      contact_id: output?.contactId,
      page: output?.page,
      page_size: output?.limit,
      status: output?.status,
    };
  }
}
