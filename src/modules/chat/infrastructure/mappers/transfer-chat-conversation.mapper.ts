import type {
  TransferChatConversationRequest,
  TransferChatConversationResponse,
} from '../../domain/interfaces';
import type {
  TransferChatConversationRequestDTO,
  TransferChatConversationResponseDTO,
} from '../dtos';

import { BaseException } from '@http-client/exceptions/base.exception';

export class TransferChatConversationMapper {
  static mapFrom(
    input: TransferChatConversationResponseDTO,
  ): TransferChatConversationResponse {
    if (!input?.results?.contact_id)
      throw new BaseException({
        message:
          'No se pudo transferir la conversación. El contact_id no fue obtenido en la respuesta.',
        status: 400,
      });

    if (!input?.results?.conversation_id)
      throw new BaseException({
        message:
          'No se pudo transferir la conversación. El conversation_id no fue obtenido en la respuesta.',
        status: 400,
      });

    return {
      contact_id: input?.results?.contact_id,
      conversation_id: input?.results?.conversation_id,
    };
  }

  static mapTo(
    output: TransferChatConversationRequest,
  ): TransferChatConversationRequestDTO {
    return {
      agent_id: output?.agentId,
      contact_id: output?.contactId,
      team_codename: output?.teamCodename,
    };
  }
}
