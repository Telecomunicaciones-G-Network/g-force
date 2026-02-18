import type {
  EmitMarkMessagesAsReadRequestInterface,
  EmitMarkMessagesAsReadResponseInterface,
} from '../../domain/interfaces';
import type {
  EmitMarkMessagesAsReadRequestDTO,
  EmitMarkMessagesAsReadResponseDTO,
} from '../dtos';

export class EmitMarkMessagesAsReadMapper {
  static mapTo(
    output: EmitMarkMessagesAsReadRequestInterface,
  ): EmitMarkMessagesAsReadRequestDTO {
    return {
      contact_id: output.contactId,
    };
  }

  static mapFrom(
    input: EmitMarkMessagesAsReadResponseDTO,
  ): EmitMarkMessagesAsReadResponseInterface {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id,
      success: input?.success,
    };
  }
}
