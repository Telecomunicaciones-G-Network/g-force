export interface EmitSendTextMessageRequest {
  contactId: string;
  data: string;
  onSuccess?: () => void;
}
