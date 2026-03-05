import type {
  EmitSendInternalMessageRequest,
  EmitSendInternalMessageResponse,
} from '../../domain/interfaces';
import type {
  EmitSendInternalMessageRequestDTO,
  EmitSendInternalMessageResponseDTO,
} from '../dtos';

/**
 * @name EmitSendInternalMessageMapper
 *
 * @description This mapper converts the emit send internal message response DTO to the emit send internal message response domain.
 */
export class EmitSendInternalMessageMapper {
  /**
   * @name mapFrom
   *
   * @description This method converts the emit send internal message response DTO to the emit send internal message response domain.
   *
   * @param {EmitSendInternalMessageResponseDTO} input - The emit send internal message response DTO.
   *
   * @returns {EmitSendInternalMessageResponse} The emit send internal message response domain.
   */
  static mapFrom(
    input: EmitSendInternalMessageResponseDTO & { id?: string },
  ): EmitSendInternalMessageResponse {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id || input?.id,
      success: input?.success ?? true,
    };
  }

  /**
   * @name mapTo
   *
   * @description This method converts the emit send internal message request domain to the emit send internal message request DTO.
   *
   * @param {EmitSendInternalMessageRequest} output - The request from the domain interface.
   *
   * @returns {EmitSendInternalMessageRequestDTO} The request in DTO format.
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
