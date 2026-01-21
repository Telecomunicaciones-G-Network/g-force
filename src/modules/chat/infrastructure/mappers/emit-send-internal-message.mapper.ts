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
 * This mapper transforms the request from the domain interface to the DTO.
 */
export class EmitSendInternalMessageMapper {
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
   * Map the request from the domain interface to the DTO.
   *
   * @param output - The request from the domain interface.
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
