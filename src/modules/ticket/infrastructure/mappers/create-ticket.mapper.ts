import type {
  CreateTicketRequest,
  CreateTicketResponse,
} from '../../domain/interfaces';
import type { CreateTicketRequestDTO, CreateTicketResponseDTO } from '../dtos';

export class CreateTicketMapper {
  public static mapFrom(input: CreateTicketResponseDTO): CreateTicketResponse {
    return {
      status: input?.status,
      success: input?.success,
      ticket: input?.results || null,
    };
  }

  public static mapTo(output: CreateTicketRequest): CreateTicketRequestDTO {
    return {
      client_id: Number(output?.clientId),
      assigned_department_id: output?.assignedDepartmentId,
      contract_id: output?.contractId,
      issue_id: output?.issueId,
      description: output?.description,
    };
  }
}
