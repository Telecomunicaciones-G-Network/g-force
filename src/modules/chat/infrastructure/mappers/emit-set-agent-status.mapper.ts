import type {
  EmitSetAgentStatusRequest,
  EmitSetAgentStatusResponse,
} from '@module-chat/domain/interfaces';
import type {
  EmitSetAgentStatusRequestDTO,
  EmitSetAgentStatusResponseDTO,
} from '@module-chat/infrastructure/dtos';

/**
 * Emit Set Agent Status Mapper
 *
 * This mapper converts the emit set agent status response DTO to the emit set agent status response domain.
 */
export class EmitSetAgentStatusMapper {
  /**
   * Map the response from the DTO to the domain interface.
   *
   * @param input - The response from the DTO.
   *
   * @returns The response in domain interface format.
   */
  static mapFrom(
    input: EmitSetAgentStatusResponseDTO,
  ): EmitSetAgentStatusResponse {
    return {
      success: input?.success,
    };
  }

  /**
   * Map the request from the domain interface to the DTO.
   *
   * @param output - The request from the domain interface.
   *
   * @returns The request in DTO format.
   */
  static mapTo(
    output: Pick<EmitSetAgentStatusRequest, 'status'>,
  ): EmitSetAgentStatusRequestDTO {
    return {
      status: output?.status,
    };
  }
}
