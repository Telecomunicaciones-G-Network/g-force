import type { GetTicketByIdResponse } from '../../domain/interfaces';

import type { GetTicketByIdResponseDTO } from '../dtos';

export class GetTicketByIdMapper {
  public static mapFrom(
    input: GetTicketByIdResponseDTO,
  ): GetTicketByIdResponse {
    return {
      status: input?.status,
      success: input?.success,
      results: input?.results || null,
    };
  }
}
