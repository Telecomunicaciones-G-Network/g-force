import type {
  EmitMarkMessageAsReadRequestInterface,
  EmitMarkMessageAsReadResponseInterface,
} from '../../domain/interfaces';
import type {
  EmitMarkMessageAsReadRequestDTO,
  EmitMarkMessageAsReadResponseDTO,
} from '../dtos';

export class EmitMarkMessageAsReadMapper {
  static mapTo(
    output: EmitMarkMessageAsReadRequestInterface,
  ): EmitMarkMessageAsReadRequestDTO {
    return {
      message_id: output.messageId,
    };
  }

  static mapFrom(
    input: EmitMarkMessageAsReadResponseDTO,
  ): EmitMarkMessageAsReadResponseInterface {
    return {
      errorCode: input?.error_code,
      messageId: input?.message_id,
      success: input?.success,
    };
  }
}
