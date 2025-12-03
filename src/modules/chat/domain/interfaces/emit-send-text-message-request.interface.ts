import type { ContactValues } from './contact-values.interface';

export interface EmitSendTextMessageRequest {
  activeContact: ContactValues;
  data: string;
  onSuccess?: () => void;
}
