export interface EmitSendDocumentMessageRequest {
  contactId: string;
  mediaId: string;
  message?: string | null;
  onSuccess?: VoidFunction;
}
