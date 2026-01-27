import type { TicketValues } from '@module-ticket/domain/interfaces';
import type { GetContactTicketsResponse } from '../../domain/interfaces';
import type { GetContactTicketsResponseDTO } from '../dtos';
import type { GetContactTicketsResult } from '../interfaces';

export class GetContactTicketsMapper {
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

  public static mapFromArray(input: GetContactTicketsResult): TicketValues {
    return {
      id: input?.id,
      contractId: input?.contract_id,
      createdAt: input?.created_at,
      dateCreatedAt: input?.date_created_at,
      description: input?.short_description,
      issue: input?.issue,
      number: input?.ticket_number,
      statusCode: input?.status_code,
      statusName: input?.status_name,
    };
  }
}
