export interface EmitSendImageMessageRequest {
  contactId: string;
  mediaId: string;
  message?: string;
  onSuccess?: () => void;
}
