import type {
  CreateTicketRequest,
  CreateTicketResponse,
} from '../../domain/interfaces';
import type { CreateTicketRequestDTO, CreateTicketResponseDTO } from '../dtos';

import { GetTicketsMapper } from './get-tickets.mapper';

export class CreateTicketMapper {
  public static mapFrom(input: CreateTicketResponseDTO): CreateTicketResponse {
    return {
      status: input?.status,
      success: input?.success,
      ticket: input?.result
        ? GetTicketsMapper.mapFromArray(input.result)
        : null,
    };
  }

  public static mapTo(output: CreateTicketRequest): CreateTicketRequestDTO {
    return {
      contact_id: output?.contactId,
      contract_id: output?.contractId,
      description: output?.description,
      issue: output?.issue,
    };
  }
}
