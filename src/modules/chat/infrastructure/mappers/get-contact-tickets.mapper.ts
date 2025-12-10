import type { TicketValues } from '@module-ticket/domain/interfaces';
import type { GetContactTicketsResponse } from '../../domain/interfaces';
import type { GetContactTicketsResponseDTO } from '../dtos';
import { GetContactTicketsResult } from '../interfaces';

export class GetContactTicketsMapper {
  public static mapFrom(
    input: GetContactTicketsResponseDTO,
  ): GetContactTicketsResponse {
    return {
      count: input?.count,
      error: input?.error,
      extra: input?.extra,
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
      createdAt: input?.created_at,
      dateCreatedAt: input?.date_created_at,
      description: input?.short_description,
      issue: input?.issue,
      number: input?.ticket_number,
      status: input?.status,
      statusName: input?.status_name,
    };
  }
}
