import type { ApiBaseResponse } from '@module-core/interfaces';

export interface TransferChatConversationResult {
  contact_id: string;
  conversation_id: string;
}

export type TransferChatConversationResponseDTO =
  ApiBaseResponse<TransferChatConversationResult>;
