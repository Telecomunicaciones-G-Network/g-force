import type { ApiResponse } from '@module-core/interfaces';

export interface TransferChatConversationResult {
  contact_id: string;
  conversation_id: string;
}

export type TransferChatConversationResponseDTO =
  ApiResponse<TransferChatConversationResult>;
