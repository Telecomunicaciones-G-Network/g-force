export interface EmitSendTextMessageRequest {
  data: string;
  latestConversationId: string;
  onSuccess?: () => void;
}
