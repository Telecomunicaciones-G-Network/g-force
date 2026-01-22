import type { GetTicketByIdResponse } from '../../domain/interfaces';
import type { GetTicketByIdResponseDTO } from '../dtos';

import { GetTicketsMapper } from './get-tickets.mapper';

export class GetTicketByIdMapper {
  public static mapFrom(
    input: GetTicketByIdResponseDTO,
  ): GetTicketByIdResponse {
    return {
      status: input?.status,
      success: input?.success,
      ticket: input?.result
        ? GetTicketsMapper.mapFromArray(input.result)
        : null,
    };
  }
}
