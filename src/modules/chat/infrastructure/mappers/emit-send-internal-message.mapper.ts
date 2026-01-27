import type {
  EmitSendInternalMessageRequest,
  EmitSendInternalMessageResponse,
} from '../../domain/interfaces';
import type {
  EmitSendInternalMessageRequestDTO,
  EmitSendInternalMessageResponseDTO,
} from '../dtos';

/**
 * Emit send internal message mapper
 *
 * This mapper converts the emit send internal message response DTO to the emit send internal message response domain.
 */
export class EmitSendInternalMessageMapper {
  /**
   * Map from emit send internal message response DTO to emit send internal message response domain
   *
   * @param input - The emit send internal message response DTO.
   *
   * @returns The emit send internal message response domain.
   */
  static mapFrom(
    input: EmitSendInternalMessageResponseDTO,
  ): EmitSendInternalMessageResponse {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id,
      success: input?.success,
    };
  }

  /**
   * Map to emit send internal message request DTO
   *
   * @param output - The request from the domain interface.
   *
   * @returns The request in DTO format.
   */
  static mapTo(
    output: EmitSendInternalMessageRequest,
  ): EmitSendInternalMessageRequestDTO {
    return {
      contact_id: output?.contactId,
      text: output?.internalMessage,
    };
  }
}
