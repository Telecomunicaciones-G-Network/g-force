import type { EmitSendImageMessageRequest } from '../../domain/interfaces';
import type { EmitSendImageMessageRequestDTO } from '../dtos';

export class EmitSendImageMessageMapper {
  static mapTo(
    output: EmitSendImageMessageRequest,
  ): EmitSendImageMessageRequestDTO {
    return {
      conversation_id: output?.conversationId,
      media_id: output?.mediaId,
    };
  }
}
