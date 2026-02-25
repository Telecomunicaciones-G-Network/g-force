import type { ApiBaseResponse } from '@module-core/interfaces';

export interface SelfAssignChatConversationResult {
  contact_id: string;
  conversation_id: string;
}

export type SelfAssignChatConversationResponseDTO =
  ApiBaseResponse<SelfAssignChatConversationResult>;
