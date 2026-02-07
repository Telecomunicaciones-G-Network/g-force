export interface EmitSendImageMessageRequest {
  contactId: string;
  mediaId: string;
  message?: string | null;
  onSuccess?: () => void;
}
