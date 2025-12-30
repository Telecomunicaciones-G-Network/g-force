import type { TransferChatConversationRequest } from '../../domain/interfaces';
import type { TransferChatConversationRequestDTO } from '../dtos';

export class TransferChatConversationMapper {
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
