import type { ChatConversationFormData } from '@ui-chat/components/client/sections/chat-conversation/components/chat-conversation-footer/interfaces';
import type { ContactValues } from './contact-values.interface';

export interface EmitSendTextMessageRequest {
  activeContact: ContactValues;
  data: ChatConversationFormData;
  onSuccess?: () => void;
}
