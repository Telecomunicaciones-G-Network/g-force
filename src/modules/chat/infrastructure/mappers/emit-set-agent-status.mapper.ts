import type {
  EmitSetAgentStatusRequest,
  EmitSetAgentStatusResponse,
} from '@module-chat/domain/interfaces';
import type {
  EmitSetAgentStatusRequestDTO,
  EmitSetAgentStatusResponseDTO,
} from '@module-chat/infrastructure/dtos';

/**
 * @name EmitSetAgentStatusMapper
 *
 * @description This mapper converts the emit set agent status response DTO to the emit set agent status response domain.
 */
export class EmitSetAgentStatusMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the emit set agent status response DTO to the emit set agent status response domain.
   *
   * @param {EmitSetAgentStatusResponseDTO} input - The emit set agent status response DTO.
   *
   * @returns {EmitSetAgentStatusResponse} The emit set agent status response domain.
   */
  static mapFrom(
    input: EmitSetAgentStatusResponseDTO,
  ): EmitSetAgentStatusResponse {
    return {
      success: input?.success,
    };
  }

  /**
   * @name mapTo
   *
   * @description This method converts the emit set agent status request domain to the emit set agent status request DTO.
   *
   * @param {Pick<EmitSetAgentStatusRequest, 'status'>} output - The emit set agent status request domain object.
   *
   * @returns {EmitSetAgentStatusRequestDTO} The emit set agent status request DTO.
   */
  static mapTo(
    output: Pick<EmitSetAgentStatusRequest, 'status'>,
  ): EmitSetAgentStatusRequestDTO {
    return {
      status: output?.status,
    };
  }
}
